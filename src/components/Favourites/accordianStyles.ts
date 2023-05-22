import {StyleSheet} from 'react-native'

const COLORS = {
  black: '#000',
  headerBackgroundWhite: '#fff',
  nutrientTextColor: '#FF8473',
  white: '#fff',
  splashGreen: '#91C788',
  nutrientContainerBackgroundColor: '#EFF7EE',
  nutrientHeading: '#2E2E2E',
};


const styles = StyleSheet.create({
  collapseHeaderContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 25,
    // marginBottom: 15,
    backgroundColor: COLORS.splashGreen,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
  },
  collapseHeaderText: {
    // borderWidth: 1,
    fontSize: 20,
    padding: 15,
    fontFamily: 'Signika-Regular',
    color: COLORS.white,
    alignSelf: 'center',
    paddingLeft: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: '#FFF8EE',
  },
  collapseBodyContainer: {
    // borderWidth: 1,
    borderColor: 'black',
  },
  mealDetailsContainer: {},
  mealName: {
    fontSize: 25,
    color: 'black',
    marginLeft: 15,
    // backgroundColor: COLORS.nutrientTextColor,
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
  noFavouritesContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  iconAndTextContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginTop: '60%',
  },
  noFavourites: {
    fontFamily: 'Signika-Regular', 
    marginTop: 10
  },
});

export {styles}