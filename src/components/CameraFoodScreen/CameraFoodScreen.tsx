import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
import {styles} from './cameraStyles';
import {
  CAMERA_IMAGE_TEXT_NUTRITION,
  X_API_KEY,
  CONTENT_TYPE,
  ENC_TYPE,
} from '../../apiUrls/index';
import {
  ICON_REPEAT_OUTLINE,
  ICON_REPEAT_OUTLINE_SIZE,
  ACTIVITY_INDICATOR_SIZE,
  CLICK_PHOTO,
  ICON_SEND_OUTLINE,
  ICON_SEND_OUTLINE_SIZE,
} from '../../constants/constants';

const CameraFoodScreen = () => {
  // All the states are here
  const [imageData, setImageData] = useState(``);
  const [takePhotoClicked, setTakePhotoClicked] = useState(false);
  const [data, setData] = useState({});
  const [cameraPosition, setCameraPosition] = useState('back');
  const [loading, setLoading] = useState(false);

  // All the hooks are here
  const devices = useCameraDevices();
  const device = devices[cameraPosition];
  const camera = useRef(null);
  const isFocused = useIsFocused();

  // effect are here
  useEffect(() => {
    checkPermission();
  }, []);

  // All the functions are here
  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    console.log(newCameraPermission);
    if (newCameraPermission === 'denied') await Linking.openSettings();
  };

  const takePicture = async () => {
    if (camera != null) {
      const photo = await camera.current.takePhoto();
      // console.log(`photo`);
      // console.log(photo);
      // console.log(`photo path`);
      // console.log(photo.path);
      setImageData(photo.path);
      setTakePhotoClicked(false);
    }
  };
  const flipCamera = useCallback(() => {
    setCameraPosition(p => (p === 'back' ? 'front' : 'back'));
  }, []);

  const apiUrl = CAMERA_IMAGE_TEXT_NUTRITION;
  const searchResult = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('image', {
      uri: 'file://' + imageData,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': CONTENT_TYPE,
          'X-Api-Key': X_API_KEY,
          enctype: ENC_TYPE,
          processData: false,
          contentType: false,
        },
      });
      // console.log('Image uploaded successfully!');
      // console.log('Server response:', response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      // console.error('Error uploading image:', error);
    }
  };

  if (device == null)
    return (
      <ActivityIndicator
        size={ACTIVITY_INDICATOR_SIZE}
        style={styles.activityIndicator}
      />
    );

  // console.log(data);
  // console.log('data?.items');
  // console.log(data?.items);
  return (
    <View style={styles.cameraContainer}>
      {takePhotoClicked ? (
        <View style={styles.cameraContainer}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isFocused}
            photo
          />
          <View style={styles.cameraBottomContainer}>
            <TouchableOpacity
              style={styles.cameraBtn}
              onPress={() => {
                takePicture();
              }}>
              <View style={styles.innerCameraBtn}></View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.styleflipCamera}
              onPress={flipCamera}>
              <Ionicons
                name={ICON_REPEAT_OUTLINE}
                size={ICON_REPEAT_OUTLINE_SIZE}></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.imageAndBtnContainer}>
          {imageData !== '' && (
            <Image source={{uri: 'file://' + imageData}} style={styles.image} />
          )}
          {imageData !== '' ? (
            <>
              <View style={styles.clickPhotoAndBtn}>
                <TouchableOpacity
                  style={[styles.btn, {width: '80%'}]}
                  onPress={() => {
                    setTakePhotoClicked(true);
                  }}>
                  <Text style={styles.btnText}>{CLICK_PHOTO}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sendBtnContainer}
                  onPress={searchResult}>
                  <Ionicons
                    name={ICON_SEND_OUTLINE}
                    size={ICON_SEND_OUTLINE_SIZE}
                    style={{transform: [{rotateZ: '-20deg'}]}}></Ionicons>
                </TouchableOpacity>
              </View>
              {loading ? (
                <ActivityIndicator />
              ) : data.length == 0 ? ( //here data not comes thatswhy difficult to figure out the checks works well or not
                <View style={styles.resultsContainer}>
                  <Text>No results found</Text>
                </View>
              ) : (
                <></> // here need to render the details
              )}
            </>
          ) : (
            <View style={styles.clickPhotoAndBtn}>
              <TouchableOpacity
                style={[styles.btn, {alignSelf: 'center'}]}
                onPress={() => {
                  setTakePhotoClicked(true);
                }}>
                <Text style={styles.btnText}>{CLICK_PHOTO}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default CameraFoodScreen;
