import { StyleSheet } from 'react-native';

const COLORS = {
  white: '#fff',
  blackForCalendarHeading: '#0D0D0D',
  splashGreen: '#91C788',
  nutrientContainerBackgroundColor: '#EFF7EE',
  nutrientHeading: '#2E2E2E',
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
    color: COLORS.blackForCalendarHeading,
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