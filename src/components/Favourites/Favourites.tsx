import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Accordian from './Accordian';

const COLORS = {
  headerTextBlack: '#000',
  headerBackgroundWhite: '#fff',
};

const Favourites = () => {
  return (
    <>
      <View style={styles.favouritesContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Your Favourites Meal</Text>
        </View>
        <Accordian />
        {/* <Text>{favourites}</Text> */}
      </View>
    </>
  );
};

export default Favourites;

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
    marginVertical: 15,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500,
  },
});
