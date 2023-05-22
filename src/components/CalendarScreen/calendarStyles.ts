import { StyleSheet } from 'react-native';

const COLORS = {
  white: '#fff',
  blackForSearchHeading: '#0D0D0D',
};

const styles = StyleSheet.create({
  scrollViewContainer: {backgroundColor: 'white'},
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  calendarHeadingContainer: {
    // borderColor: '#000',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  calendarHeading: {
    fontSize: 24,
    color: COLORS.blackForSearchHeading,
    fontFamily: 'Signika-SemiBold',
    // lineHeight: 16,
    // fontWeight: 500,
  },
  mealDataContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    flex: 1,
  },

  mealDetailsParentContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
    marginBottom: 20,
    // backgroundColor: COLORS.white,
  },
  mealDetailsContainer: {},
  mealName: {
    fontSize: 25,
    color: 'black',
    marginLeft: 30,
    fontFamily: 'Signika-Regular',
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
  noDataInCalendarContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    flex: 1,
  },
  noDataInCalendarText: {fontFamily: 'Signika-Regular'},
  iconAndTextContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  noMealDataContainer: {
    alignItems: 'center',
    marginTop: 150,
    // borderWidth: 1,
  },
  noMealTextOrDate: {fontFamily: 'Signika-Regular'},
});

export {styles}