import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const COLORS = {
  black: '#000',
  headerBackgroundWhite: '#fff',
  nutrientTextColor: '#FF8473',
  white: '#fff',
};

const Accordian = () => {
  const [favourites, setFavourites] = useState({});
  const getFavourites = async () => {
    const mealName = await AsyncStorage.getItem('mealName');
    const parsedJsonMealName = JSON.parse(mealName);
    setFavourites(parsedJsonMealName);
    console.log(parsedJsonMealName);
  };

  useEffect(() => {
    getFavourites();
  }, []);

  const firstLetter = name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  return (
    <>
      {Object.keys(favourites).map(key => (
        <Collapse>
          <CollapseHeader>
            <View style={styles.collapseHeaderContainer}>
              <Text style={styles.collapseHeaderText}>{firstLetter(key)}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.collapseBodyContainer}>
              <View style={styles.nutrientDetailsContainer}>
                <View style={styles.nutrientDetailsRowOne}>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Calories</Text>
                    <Text style={styles.nutrientValue}>
                      {favourites[key].calories}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Carbs (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {favourites[key].carbohydrates_total_g}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Cholestrol (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {favourites[key].cholesterol_mg}
                    </Text>
                  </View>
                  {/* <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Sat. Fat (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {favourites[key].fat_saturated_g}
                    </Text>
                  </View> */}
                </View>
                <View style={styles.nutrientDetailsRowOne}>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Fat (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {favourites[key].fat_total_g}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Fiber (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {favourites[key].fiber_g}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Potassium (mg)</Text>
                    <Text style={styles.nutrientValue}>
                      {favourites[key].potassium_mg}
                    </Text>
                  </View>
                  {/* <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Protein (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {favourites[key].protein_g}
                    </Text>
                  </View> */}
                </View>
                <View style={styles.nutrientDetailsRowOne}>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Protein (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {favourites[key].protein_g}
                    </Text>
                  </View>
                  {/* <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Serving Size (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {favourites[key].serving_size_g}
                    </Text>
                  </View> */}
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Sodium (mg)</Text>
                    <Text style={styles.nutrientValue}>
                      {favourites[key].sodium_mg}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Sugar (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {favourites[key].sugar_g}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </CollapseBody>
        </Collapse>
      ))}
    </>
  );
};

export default Accordian;

const styles = StyleSheet.create({
  collapseHeaderContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    backgroundColor: '#FF9385',
    borderRadius: 10,
  },
  collapseHeaderText: {
    fontSize: 20,
    padding: 15,
    // borderWidth: 1,
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
    marginBottom: 30,
    // backgroundColor: COLORS.nutrientTextColor,
  },
  nutrientDetailsRowOne: {
    // borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  nutrientContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFF8EE',
    marginVertical: 10,
    backgroundColor: '#FFF8EE',
    borderRadius: 10,
    width: '30%',
  },
  nutrientHeading: {
    fontSize: 16,
    // marginHorizontal: 5,
    marginVertical: 5,
    color: COLORS.nutrientTextColor,
  },
  nutrientValue: {
    fontSize: 24,
    // marginHorizontal: 15,
    marginVertical: 5,
    color: COLORS.nutrientTextColor,
  },
});
