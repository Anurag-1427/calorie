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
import {
  CALORIES,
  CARBS_IN_GRAM,
  CHOLESTROL_IN_MGRAM,
  FAT_IN_GRAM,
  FIBER_IN_GRAM,
  POTASSIUM_IN_MGRAM,
  PROTEIN_IN_GRAM,
  SODIUM_IN_MGRAM,
  SUGAR_IN_GRAM,
  ICON_BOOKMARK_OUTLINE,
  ICON_BOOKMARK_OUTLINE_SIZE,
  NO_FAVOURITES,
} from '../../constants/constants';

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
    // console.log(parsedJsonMealName);
  };

  useEffect(() => {
    getFavourites();
  }, [favourites]);

  const firstLetter = name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
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
                      <View style={[styles.nutrientContainer]}>
                        <Text style={styles.nutrientHeading}>{CALORIES}</Text>
                        <Text style={styles.nutrientValue}>
                          {favourites[key].calories}
                        </Text>
                      </View>
                      <View style={styles.nutrientContainer}>
                        <Text style={styles.nutrientHeading}>
                          {CARBS_IN_GRAM}
                        </Text>
                        <Text style={styles.nutrientValue}>
                          {favourites[key].carbohydrates_total_g}
                        </Text>
                      </View>
                      <View style={[styles.nutrientContainer]}>
                        <Text style={styles.nutrientHeading}>
                          {CHOLESTROL_IN_MGRAM}
                        </Text>
                        <Text style={styles.nutrientValue}>
                          {favourites[key].cholesterol_mg}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.nutrientDetailsRowOne}>
                      <View style={[styles.nutrientContainer]}>
                        <Text style={styles.nutrientHeading}>
                          {FAT_IN_GRAM}
                        </Text>
                        <Text style={styles.nutrientValue}>
                          {favourites[key].fat_total_g}
                        </Text>
                      </View>
                      <View style={styles.nutrientContainer}>
                        <Text style={styles.nutrientHeading}>
                          {FIBER_IN_GRAM}
                        </Text>
                        <Text style={styles.nutrientValue}>
                          {favourites[key].fiber_g}
                        </Text>
                      </View>
                      <View style={[styles.nutrientContainer]}>
                        <Text style={styles.nutrientHeading}>
                          {POTASSIUM_IN_MGRAM}
                        </Text>
                        <Text style={styles.nutrientValue}>
                          {favourites[key].potassium_mg}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.nutrientDetailsRowOne}>
                      <View style={[styles.nutrientContainer]}>
                        <Text style={styles.nutrientHeading}>
                          {PROTEIN_IN_GRAM}
                        </Text>
                        <Text style={styles.nutrientValue}>
                          {favourites[key].protein_g}
                        </Text>
                      </View>
                      <View style={styles.nutrientContainer}>
                        <Text style={styles.nutrientHeading}>
                          {SODIUM_IN_MGRAM}
                        </Text>
                        <Text style={styles.nutrientValue}>
                          {favourites[key].sodium_mg}
                        </Text>
                      </View>
                      <View style={[styles.nutrientContainer]}>
                        <Text style={styles.nutrientHeading}>
                          {SUGAR_IN_GRAM}
                        </Text>
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
            <Ionicons
              name={ICON_BOOKMARK_OUTLINE}
              size={ICON_BOOKMARK_OUTLINE_SIZE}></Ionicons>
            <Text style={styles.noFavourites}>{NO_FAVOURITES}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Accordian;
