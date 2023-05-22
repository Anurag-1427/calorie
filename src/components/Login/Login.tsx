import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {styles} from './loginStyles';
import {
  EMAIL_REG_EX,
  PASSWORD_REG_EX,
  LOGIN_SUCCESS,
  LOGIN,
  EMAIL_ADDRESS,
  ICON_PERSON_OUTLINE,
  ICON_PERSON_OUTLINE_SIZE,
  EMAIL_PLACEHOLDER,
  EMAIL_KEYBOARD_TYPE,
  EMAIL_RETURN_TYPE,
  PASSWORD,
  ICON_LOCK_CLOSED_OUTLINE,
  ICON_LOCK_CLOSED_OUTLINE_SIZE,
  PASSWORD_PLACEHOLDER,
  FORGOT_PASSWORD,
  DONT_HAVE_AN_ACCOUNT,
  REGISTER,
} from '../../constants/constants';
import routes from '../../routes';

const Login = () => {
  // All the states are here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [eyeImage, setEyeImage] = useState('eye-outline');

  // Navigation hooks
  const navigator = useNavigation();

  // All the refs are here
  const passwordRef = useRef();

  // All the regular expressions are here
  const emailRegEx = EMAIL_REG_EX;
  const passwordRegEx = PASSWORD_REG_EX;

  // Checkers
  const emailCheck = email.length > 0 && emailRegEx.test(email);
  const passwordCheck = password.length > 0 && passwordRegEx.test(password);
  const forOpacity =
    emailCheck && passwordCheck
      ? styles.forOpacityEnabled
      : styles.forOpacityDisabled;

  // All the functions are here
  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
    setEyeImage(secureTextEntry ? 'eye-off-outline' : 'eye-outline');
  };

  const loginHandler = async () => {
    try {
      // console.log(`Email: `, email);
      // console.log(`Password: `, password);

      const isUserLogin = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log(isUserLogin);
      navigator.navigate(routes.BottomTabNavigation.path);
      ToastAndroid.show(LOGIN_SUCCESS, ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    }
  };

  // Navigation
  const registerBtn = () => {
    navigator.navigate(routes.Register.path);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{LOGIN}</Text>
      </View>
      {/* This below is for email input */}
      <View style={styles.inputParentContainer}>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>{EMAIL_ADDRESS}</Text>
        </View>
        <View style={styles.textInputParentContainer}>
          <View style={styles.textInputContainer}>
            <Ionicons
              name={ICON_PERSON_OUTLINE}
              size={ICON_PERSON_OUTLINE_SIZE}></Ionicons>

            <TextInput
              style={styles.textInput}
              placeholder={EMAIL_PLACEHOLDER}
              keyboardType={EMAIL_KEYBOARD_TYPE}
              returnKeyType={EMAIL_RETURN_TYPE}
              onChangeText={value => setEmail(value)}
              value={email}
              onSubmitEditing={() => passwordRef.current.focus()}></TextInput>
          </View>
        </View>
      </View>
      {/* This below is for password input */}
      <View style={[styles.inputParentContainer, {marginTop: 25}]}>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>{PASSWORD}</Text>
        </View>
        <View style={styles.textInputParentContainer}>
          <View style={styles.textInputContainer}>
            <Ionicons
              name={ICON_LOCK_CLOSED_OUTLINE}
              size={ICON_LOCK_CLOSED_OUTLINE_SIZE}></Ionicons>

            <TextInput
              style={[styles.textInput, {width: '72%'}]}
              placeholder={PASSWORD_PLACEHOLDER}
              secureTextEntry={secureTextEntry}
              ref={passwordRef}
              onChangeText={value => setPassword(value)}
              value={password}></TextInput>
            <TouchableOpacity onPress={toggleSecureTextEntry}>
              <Ionicons
                name={eyeImage}
                size={22}
                style={{marginLeft: 5}}></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* This below is for forgot password text */}
      {/* <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>{FORGOT_PASSWORD}</Text>
        </TouchableOpacity>
      </View> */}

      {/* Login Button */}
      <View style={styles.loginBtnAndDontHaveAccountContainer}>
        <View style={styles.loginBtnContainer}>
          <TouchableOpacity
            style={[styles.loginBtn, forOpacity]}
            onPress={loginHandler}>
            <Text style={styles.loginBtnText}>{LOGIN}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dontHaveAccountContainer}>
          <Text style={styles.dontHaveAccountText}>{DONT_HAVE_AN_ACCOUNT}</Text>
          <TouchableOpacity
            style={styles.signUpBtnContainer}
            onPress={registerBtn}>
            <Text style={styles.signUpBtnText}>{REGISTER}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
