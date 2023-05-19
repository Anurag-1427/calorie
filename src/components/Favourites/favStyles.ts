import {StyleSheet} from 'react-native'

const COLORS = {
  headerTextBlack: '#000',
  headerBackgroundWhite: '#fff',
  btnColorGreen: '#91C788',
  white: '#fff',
};

const styles = StyleSheet.create({
  favouritesContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    // borderWidth: 1,
    borderColor: COLORS.headerTextBlack,
    backgroundColor: COLORS.headerBackgroundWhite,
    color: COLORS.headerTextBlack,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Signika-SemiBold',
    // marginVertical: 15,
    // lineHeight: 16,
    // fontWeight: 500,
  },
});

export {styles}
