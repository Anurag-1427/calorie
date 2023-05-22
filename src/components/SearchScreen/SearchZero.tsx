import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from './searchZeroStyles';
import BasketImage from '../../assets/images/shopping-basket.png';

const SearchZero = ({text}) => {
  return (
    <View style={styles.shoppingBasketContainer}>
      <Image style={styles.shoppingBasketImg} source={BasketImage} />
      <View style={styles.taglineContainer}>
        <Text style={styles.tagline}>{text}</Text>
      </View>
    </View>
  );
};

export default SearchZero;
