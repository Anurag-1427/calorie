import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

const COLORS = {
  white: '#fff',
  blackForSearchHeading: '#0D0D0D',
  placeholderTextColor: '#666',
  mealImage: '#EFF3F6',
  addToCartGreen: '#91C788',
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
  mealDetailsContainer: {},
  mealName: {
    fontSize: 22,
    color: 'black',
    marginLeft: 32,
    fontFamily: 'Signika-Medium',
  },
  nutrientDetailsContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 8,
  },
  nutrientDetailsRowOne: {
    // borderWidth: 1,
    borderColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
    alignSelf: 'center',
    // width: '100%',
    borderRadius: 24,
  },
  nutrientContainer: {
    borderWidth: 1,
    // borderColor: 'black', // for design evalutaion
    alignItems: 'center',
    backgroundColor: '#FFF8EE',
    marginHorizontal: 3,
    paddingVertical: 8,
    borderColor: '#FFF8EE', // important
    // justifyContent: 'center',
    // marginVertical: 7,
    borderRadius: 20,
    width: '28%',
  },
  nutrientHeading: {
    // fontSize: 16,
    marginVertical: 4,
    marginBottom: 4,
    color: '#FF8473',
    fontFamily: 'Signika-Regular',
  },
  nutrientValue: {
    fontSize: 19,
    marginVertical: 5,
    marginTop: 10,
    color: '#FF8473',
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
    width: width / 2.5,
    // marginHorizontal: 5,
    backgroundColor: COLORS.addToCartGreen,
  },
  addToCartText: {
    // borderWidth: 1,
    fontSize: 18,
    // paddingHorizontal: 65,
    paddingVertical: 12,
    color: 'white',
    fontFamily: 'Signika-Regular',
    // height: 72,
    // // paddingTop: 17,
    // borderColor: 'black',
    // borderRadius: 24,
    // justifyContent: 'center',
    // fontWeight: 600,
  },
});


export {styles}