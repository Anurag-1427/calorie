import { StyleSheet } from 'react-native';

const COLORS = {
  green: '#91C788',
  loginBtnColor: '#FF9385',
  white: '#fff',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: 'black',
    backgroundColor: COLORS.white,
  },
  headingContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 88,
  },
  heading: {
    // borderWidth: 1,
    borderColor: 'black',
    fontSize: 28,
    color: COLORS.green,
    // fontWeight: 'bold',
    fontFamily: 'Signika-Bold',
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
    // fontWeight: 500,
    fontFamily: 'Signika-SemiBold',
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
    fontFamily: 'Signika-Regular',
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
    // fontWeight: 800,
    fontFamily: 'Signika-Bold',
    marginRight: 12,
    color: COLORS.green,
  },
  loginBtnAndDontHaveAccountContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    width: '85%',
    position: 'absolute',
    bottom: 80,
  },
  loginBtnContainer: {
    // borderWidth: 1,
    borderColor: 'black',
  },
  loginBtn: {
    // borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
    borderRadius: 24,
    backgroundColor: COLORS.loginBtnColor,
  },
  loginBtnText: {
    // borderWidth: 1,
    borderColor: 'black',
    fontSize: 24,
    color: 'white',
    fontFamily: 'Signika-Regular',
  },
  dontHaveAccountContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  dontHaveAccountText: {
    // borderWidth: 1,
    borderColor: 'black',
    fontSize: 13,
    fontFamily: 'Signika-Regular',
  },
  signUpBtnContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginLeft: 5,
  },
  signUpBtnText: {
    // borderWidth: 1,
    borderColor: 'black',
    color: COLORS.green,
    // fontWeight: 800,
    fontFamily: 'Signika-SemiBold',
    fontSize: 13,
  },
  forOpacityEnabled: {
    opacity: 1,
  },
  forOpacityDisabled: {
    opacity: 0.5,
  },
});


export {styles}