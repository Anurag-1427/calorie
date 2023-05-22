import {StyleSheet} from 'react-native'

const COLORS = {
  black: '#000',
  headerBackgroundWhite: '#fff',
  nutrientTextColor: '#FF8473',
  white: '#fff',
};


const styles = StyleSheet.create({
  collapseHeaderContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 25,
    // marginBottom: 15,
    backgroundColor: '#FF9385',
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