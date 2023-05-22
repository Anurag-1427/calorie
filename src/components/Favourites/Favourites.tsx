import {View, Text} from 'react-native';
import React from 'react';
import Accordian from './Accordian';
import {styles} from './favStyles';
import {FAVOURITES_MEAL_LIST} from '../../constants/constants';

const Favourites = () => {
  return (
    <>
      <View style={styles.favouritesContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{FAVOURITES_MEAL_LIST}</Text>
        </View>
        <Accordian />
      </View>
    </>
  );
};

export default Favourites;
