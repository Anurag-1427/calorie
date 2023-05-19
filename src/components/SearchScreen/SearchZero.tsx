import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from './searchZeroStyles';

const SearchZero = ({text}) => {
  return (
    <View style={styles.shoppingBasketContainer}>
      <Image
        style={styles.shoppingBasketImg}
        source={require('../../assets/images/shopping-basket.png')}
      />
      <View style={styles.taglineContainer}>
        <Text style={styles.tagline}>{text}</Text>
      </View>
    </View>
  );
};

export default SearchZero;
