import {StyleSheet} from 'react-native'

const COLORS = {
  blackForCameraHeading: '#0D0D0D',
};


const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1, 
    justifyContent: 'center', 
    alignSelf: 'center'
  },
  cameraContainer: {
    flex: 1,
  },
  cameraBottomContainer: {
    backgroundColor: 'white',
    height: 168,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  cameraBtn: {
    width: 72,
    height: 72,
    borderRadius: 50,
    backgroundColor: '#FFC0B8',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCameraBtn: {
    width: 40,
    height: 40,
    backgroundColor: '#FF8473',
    borderRadius: 50,
  },
  styleflipCamera: {
    position: 'absolute',
    bottom: 65,
    alignSelf: 'flex-end',
    right: 65,
  },
  imageAndBtnContainer: {
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
  },
  image: {
    width: '90%',
    height: '80%',
    marginBottom: 15,
    borderRadius: 20,
  },
  cameraHeaderAndBtnContainer: {
    // borderWidth: 1,
    borderColor: 'blue',
  },
  headerContainer: {
    // borderWidth: 1,
    borderColor: 'blue',
    position: 'absolute',
    bottom: 250,
    left: -35,
  },
  cameraHeaderText: {
    // borderWidth: 1,
    borderColor: 'blue',
    fontSize: 24,
    color: COLORS.blackForCameraHeading,
    fontFamily: 'Signika-SemiBold',
    
  },
  clickPhotoAndBtn: {
    // borderWidth: 1,
    borderColor: 'blue',
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    // borderWidth: 1,
    height: 72,
    width: '90%',
    borderRadius: 24,
    backgroundColor: '#91C788',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
  },
  btnText: {
    // fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    fontFamily: 'Signika-SemiBold',
  },
  sendBtnContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    height: 72,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 25,
  },
});

export {styles}