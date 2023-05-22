import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

const COLORS = {
  white: '#fff',
  blackForSearchHeading: '#0D0D0D',
  placeholderTextColor: '#666',
  mealImage: '#EFF3F6',
  splashGreen: '#91C788',
  nutrientContainerBackgroundColor: '#EFF7EE',
  nutrientHeading: '#2E2E2E',
};

const styles = StyleSheet.create({
  searchScreenContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  searchHeadingContainer: {
    // borderColor: '#000',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  searchHeading: {
    fontSize: 24,
    // lineHeight: 16,
    // fontWeight: 500,
    color: COLORS.blackForSearchHeading,
    fontFamily: 'Signika-SemiBold',
  },
  textInputParentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    // borderColor: '#222',
    // borderWidth: 1,
  },
  textInputContainer: {
    borderColor: '#111',
    borderWidth: 1, // important
    width: 327,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  textInput: {
    width: '80%',
    height: 64,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Signika-Regular',
  },
  placeholderTextStyle: {
    paddingLeft: '19.2%',
  },
  mealImgContainer: {
    // borderWidth: 1,
    borderColor: 'black',
  },
  mealImg: {
    // borderWidth: 1,
    borderColor: COLORS.mealImage,
    alignSelf: 'center',
    marginVertical: 20,
    height: 150,
    width: 150,
    backgroundColor: COLORS.mealImage,
    borderRadius: 20,
  },
  mealDetailsParentContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
    marginBottom: 20,
  },
  mealDetailsContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
  },
  mealName: {
    fontSize: 22,
    color: 'black',
    marginLeft: '16%',
    fontFamily: 'Signika-Medium',
  },
  nutrientDetailsContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
  },
  nutrientDetailsRowOne: {
    // borderWidth: 1,
    borderColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: 5,
    width: '70%',
  },
  nutrientContainer: {
    // borderWidth: 1,
    borderColor: 'black', // for design evalutaion
    alignItems: 'center',
    backgroundColor: COLORS.nutrientContainerBackgroundColor,
    marginHorizontal: 3,
    borderRadius: 10,
    width: '30%',
    height: '100%'
  },
  nutrientHeading: {
    // borderWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
    color: COLORS.nutrientHeading,
    fontFamily: 'Signika-Regular',
  },
  nutrientValue: {
    // borderWidth: 1,
    borderColor: 'black',
    fontSize: 20,
    marginVertical: 5,
    // marginTop: 10,
    color: COLORS.splashGreen,
    fontFamily: 'Signika-Regular',
  },
  addToCartContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 29,
    // width: '100%',
    // borderRadius: 24,
  },
  addToCartButton: {
    // borderWidth: 1,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 52,
    width: width / 3.5,
    // marginHorizontal: 5,
    backgroundColor: COLORS.splashGreen,
  },
  addToCartText: {
    // borderWidth: 1,
    fontSize: 18,
    paddingVertical: 12,
    color: 'white',
    fontFamily: 'Signika-Regular',
  },
});


export {styles}