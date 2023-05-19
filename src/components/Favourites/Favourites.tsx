import {View, Text} from 'react-native';
import React from 'react';
import Accordian from './Accordian';
import {styles} from './favStyles';

const Favourites = () => {
  return (
    <>
      <View style={styles.favouritesContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Your Favourites Meal List</Text>
        </View>
        <Accordian />
      </View>
    </>
  );
};

export default Favourites;
