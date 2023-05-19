import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './accordianStyles';

const Accordian = () => {
  // This state leads to refresh the screen
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getFavourites();
    }, 2000);
  }, []);

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
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {/* {Object.keys(favourites) ? ( */}
      {favourites ? (
        <>
          {Object.keys(favourites).map(key => (
            <Collapse key={key}>
              <CollapseHeader>
                <View style={styles.collapseHeaderContainer}>
                  <Text style={styles.collapseHeaderText}>
                    {firstLetter(key)}
                  </Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={styles.collapseBodyContainer}>
                  <View style={styles.nutrientDetailsContainer}>
                    <View style={styles.nutrientDetailsRowOne}>
                      <View
                        style={[
                          styles.nutrientContainer,
                          {borderTopLeftRadius: 24, borderBottomLeftRadius: 24},
                        ]}>
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
                      <View
                        style={[
                          styles.nutrientContainer,
                          {
                            borderTopRightRadius: 24,
                            borderBottomRightRadius: 24,
                          },
                        ]}>
                        <Text style={styles.nutrientHeading}>
                          Cholestrol (mg)
                        </Text>
                        <Text style={styles.nutrientValue}>
                          {favourites[key].cholesterol_mg}
                        </Text>
                      </View>
                      {/* <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Sat. Fat (g)</Text>
                <Text style={styles.nutrientValue}>{item.fat_saturated_g}</Text>
              </View> */}
                    </View>
                    <View style={styles.nutrientDetailsRowOne}>
                      <View
                        style={[
                          styles.nutrientContainer,
                          {borderTopLeftRadius: 24, borderBottomLeftRadius: 24},
                        ]}>
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
                      <View
                        style={[
                          styles.nutrientContainer,
                          {
                            borderTopRightRadius: 24,
                            borderBottomRightRadius: 24,
                          },
                        ]}>
                        <Text style={styles.nutrientHeading}>
                          Potassium (mg)
                        </Text>
                        <Text style={styles.nutrientValue}>
                          {favourites[key].potassium_mg}
                        </Text>
                      </View>
                      {/* <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Protein (g)</Text>
                <Text style={styles.nutrientValue}>{item.protein_g}</Text>
              </View> */}
                    </View>
                    <View style={styles.nutrientDetailsRowOne}>
                      <View
                        style={[
                          styles.nutrientContainer,
                          {borderTopLeftRadius: 24, borderBottomLeftRadius: 24},
                        ]}>
                        <Text style={styles.nutrientHeading}>Protein (g)</Text>
                        <Text style={styles.nutrientValue}>
                          {favourites[key].protein_g}
                        </Text>
                      </View>
                      {/* <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Serving Size (g)</Text>
                <Text style={styles.nutrientValue}>{item.serving_size_g}</Text>
              </View> */}
                      <View style={styles.nutrientContainer}>
                        <Text style={styles.nutrientHeading}>Sodium (mg)</Text>
                        <Text style={styles.nutrientValue}>
                          {favourites[key].sodium_mg}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.nutrientContainer,
                          {
                            borderTopRightRadius: 24,
                            borderBottomRightRadius: 24,
                          },
                        ]}>
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
      ) : (
        <View style={styles.noFavouritesContainer}>
          <View style={styles.iconAndTextContainer}>
            <Ionicons name="bookmark-outline" size={80}></Ionicons>
            <Text style={{fontFamily: 'Signika-Regular', marginTop: 10}}>
              You have no favourites
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Accordian;
