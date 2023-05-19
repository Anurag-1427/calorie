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
  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

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
      console.log(`Email: `, email);
      console.log(`Password: `, password);

      const isUserLogin = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log(isUserLogin);
      navigator.navigate('BottomTabNavigation');
      ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    }
  };

  // Navigation
  const registerBtn = () => {
    navigator.navigate('Register');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Login</Text>
      </View>
      {/* This below is for email input */}
      <View style={styles.inputParentContainer}>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>Email Address</Text>
        </View>
        <View style={styles.textInputParentContainer}>
          <View style={styles.textInputContainer}>
            <Ionicons name="person-outline" size={18}></Ionicons>

            <TextInput
              style={styles.textInput}
              placeholder="Your Email Address"
              keyboardType="email-address"
              returnKeyType="next"
              // onChangeText={setQuery}
              onChangeText={value => setEmail(value)}
              value={email}
              onSubmitEditing={() => passwordRef.current.focus()}></TextInput>
          </View>
        </View>
      </View>
      {/* This below is for password input */}
      <View style={[styles.inputParentContainer, {marginTop: 25}]}>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>Password</Text>
        </View>
        <View style={styles.textInputParentContainer}>
          <View style={styles.textInputContainer}>
            <Ionicons name="lock-closed-outline" size={18}></Ionicons>

            <TextInput
              style={[styles.textInput, {width: '72%'}]}
              placeholder="Your Password"
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
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View> */}

      {/* Login Button */}
      <View style={styles.loginBtnAndDontHaveAccountContainer}>
        <View style={styles.loginBtnContainer}>
          <TouchableOpacity
            style={[styles.loginBtn, forOpacity]}
            onPress={loginHandler}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dontHaveAccountContainer}>
          <Text style={styles.dontHaveAccountText}>Don't Have An Account?</Text>
          <TouchableOpacity
            style={styles.signUpBtnContainer}
            onPress={registerBtn}>
            <Text style={styles.signUpBtnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
