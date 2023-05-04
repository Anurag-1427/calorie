import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const Accordian = () => {
  const [favourites, setFavourites] = useState();
  const getFavourites = async () => {
    const mealName = await AsyncStorage.getItem('mealName');
    const parsedJsonMealName = JSON.parse(mealName);
    setFavourites(parsedJsonMealName);
    console.log(parsedJsonMealName);

    for (const key in parsedJsonMealName) {
      if (Object.prototype.hasOwnProperty.call(parsedJsonMealName, key)) {
        // const element = parsedJsonMealName[key];
        return (
          <View style={styles.container}>
            <Collapse>
              <CollapseHeader>
                <View style={styles.collapseHeaderContainer}>
                  <Text style={styles.collapseHeaderText}>{key}</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={styles.collapseBodyContainer}>
                  <View style={styles.nutrientDetailsContainer}>
                    <View style={styles.nutrientDetailsRowOne}>
                      <View style={styles.nutrientContainer}>
                        <Text style={styles.nutrientHeading}>Calories</Text>
                        <Text style={styles.nutrientValue}>
                          {/* {item.calories} */}
                          [key.calories]
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </CollapseBody>
            </Collapse>
          </View>
        );
      }
    }
  };
  useEffect(() => {
    getFavourites();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Collapse>
          <CollapseHeader>
            <View style={styles.collapseHeaderContainer}>
              <Text style={styles.collapseHeaderText}>1. Riceee</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.collapseBodyContainer}>
              <View style={styles.nutrientDetailsContainer}>
                <View style={styles.nutrientDetailsRowOne}>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Calories</Text>
                    <Text style={styles.nutrientValue}>
                      {/* {item.calories} */}
                      30
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Carbs (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {/* {item.carbohydrates_total_g} */}
                      30
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Cholestrol (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {/* {item.cholesterol_mg} */}
                      30
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Sat. Fat (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {/* {item.fat_saturated_g} */}
                      30
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </CollapseBody>
        </Collapse>
      </View>
    </>
  );
};

export default Accordian;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
  },
  collapseHeaderContainer: {
    borderWidth: 1,
    borderColor: 'black',
    // backgroundColor: '#FFF8EE',
    // backgroundColor: '#fef',
  },
  collapseHeaderText: {
    marginVertical: 12,
    marginLeft: 35,
    fontSize: 16,
    // color: '#FF9385',
  },
  collapseBodyContainer: {
    borderWidth: 1,
    borderColor: 'black',
  },
  collapseBodyText: {
    borderWidth: 1,
    borderColor: 'black',
  },
  nutrientDetailsContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
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
  },
  nutrientHeading: {
    fontSize: 16,
    marginHorizontal: 5,
    marginVertical: 5,
    color: '#FF8473',
  },
  nutrientValue: {
    fontSize: 24,
    marginHorizontal: 15,
    marginVertical: 5,
    color: '#FF8473',
  },
});
