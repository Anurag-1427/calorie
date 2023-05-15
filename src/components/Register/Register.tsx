import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const COLORS = {
  green: '#91C788',
  loginBtnColor: '#FF9385',
};

const Register = () => {
  const forOpacity =
    emailCheck && passwordCheck
      ? styles.forOpacityEnabled
      : styles.forOpacityDisabled;
  // All the states are here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [eyeImage, setEyeImage] = useState('eye-outline');

  // All the refs are here
  const passwordRef = useRef();

  // All the regular expressions are here
  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  // Checkers
  const emailCheck = email.length > 0 && emailRegEx.test(email);
  const passwordCheck = password.length > 0 && passwordRegEx.test(password);

  // All the functions are here
  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
    setEyeImage(secureTextEntry ? 'eye-off-outline' : 'eye-outline');
  };

  // Navigation
  const navigator = useNavigation();
  const logInBtn = () => {
    navigator.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Register</Text>
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
              onChangeText={setEmail}
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
              onChangeText={setPassword}
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

      {/* Register Button */}
      <View style={styles.registerBtnAndAlreadyHaveAccountContainer}>
        <View style={styles.registerBtnContainer}>
          <TouchableOpacity style={[styles.registerBtn, forOpacity]}>
            <Text style={styles.registerBtnText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.alreadyHaveAccountContainer}>
          <Text style={styles.alreadyHaveAccountText}>
            Already Have An Account?
          </Text>
          <TouchableOpacity style={styles.logInBtnContainer} onPress={logInBtn}>
            <Text style={styles.logInBtnText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  headingContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 88,
  },
  heading: {
    // borderWidth: 1,
    borderColor: 'black',
    fontSize: 24,
    color: COLORS.green,
    fontWeight: 'bold',
  },
  inputParentContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    width: '85%',
    marginTop: 82,
  },
  inputLabelContainer: {
    // borderWidth: 1,
    borderColor: 'black',
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: 500,
    marginLeft: 12,
  },
  textInputParentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    // borderColor: '#222',
    // borderWidth: 1,
  },
  textInputContainer: {
    borderColor: '#111',
    borderWidth: 1, // important
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  textInput: {
    width: '80%',
    height: 64,
    // borderWidth: 1,
    borderColor: 'black',
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 7,
  },
  forgotPasswordContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    width: '85%',
    alignItems: 'flex-end',
    marginTop: 12,
  },
  forgotPasswordText: {
    // borderWidth: 1,
    borderColor: 'black',
    fontSize: 12,
    fontWeight: 800,
    marginRight: 12,
    color: COLORS.green,
  },
  registerBtnAndAlreadyHaveAccountContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    width: '85%',
    position: 'absolute',
    bottom: 80,
  },
  registerBtnContainer: {
    // borderWidth: 1,
    borderColor: 'black',
  },
  registerBtn: {
    // borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
    borderRadius: 24,
    backgroundColor: COLORS.loginBtnColor,
  },
  registerBtnText: {
    // borderWidth: 1,
    borderColor: 'black',
    fontSize: 24,
    color: 'white',
  },
  alreadyHaveAccountContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  alreadyHaveAccountText: {
    // borderWidth: 1,
    borderColor: 'black',
    fontSize: 13,
  },
  logInBtnContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginLeft: 5,
  },
  logInBtnText: {
    // borderWidth: 1,
    borderColor: 'black',
    color: COLORS.green,
    fontWeight: 800,
    fontSize: 13,
  },
  forOpacityEnabled: {
    opacity: 1,
  },
  forOpacityDisabled: {
    opacity: 0.5,
  },
});
