import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const COLORS = {
  green: '#91C788',
  orangeDark: '#FF8473',
  orangeLight: '#FFC0B8',
  white: '#fff',
};

const styles = StyleSheet.create({
  onBoardingScreencontainer: {
    flex: 1,
    // backgroundColor: COLORS.primary,
    backgroundColor: 'white',
    // backgroundColor: 'skyblue',
  },
  flatListSlideContainer: {
    alignItems: 'center',
    borderColor: 'black',
    width,
    // borderWidth: 1,
  },
  onBoardingScreenHeading: {
    fontSize: 24,
    color: COLORS.green,
    marginTop: 88,
    // fontWeight: 'bold',
    fontFamily: 'Signika-Bold',
  },
  onBoardingScreenImages: {
    height: 282,
    marginTop: 70,
    // width,
    // resizeMode: 'contain',
  },
  title: {
    // color: COLORS.white,
    fontSize: 22,
    // fontWeight: 'bold',
    // margin: 20,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Signika-Bold',
  },
  subTitle: {
    // color: COLORS.white,
    fontSize: 13,
    marginTop: 5,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
    fontFamily: 'Signika-Regular',
  },
  footerContainer: {
    height: height * 0.25,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    // height: 2.5,
    width: 12,
    height: 8,
    borderRadius: 16,
    // backgroundColor: '#FFC0B8',
    backgroundColor: COLORS.orangeLight,
    marginHorizontal: 3,
    // borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 72,
    borderRadius: 24,
    // backgroundColor: COLORS.white,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 5,
  },
});

export {styles}