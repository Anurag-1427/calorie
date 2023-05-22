import {
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchZero from './SearchZero';
import {styles} from './searchScreenStyles';
import {BASE_URL_NUTRITION, X_API_KEY} from '../../apiUrls/index';
import {
  ADD_TO_FAVOURITES_TOAST,
  ADD_TO_MEAL_LIST_TOAST,
  ADD_TO_MEAL_TEXT,
  CALORIES,
  CARBS_IN_GRAM,
  CHOLESTROL_IN_MGRAM,
  FAT_IN_GRAM,
  FAVOURITES_BUTTON_TEXT,
  FIBER_IN_GRAM,
  ICON_CLOSE_OUTLINE,
  ICON_CLOSE_OUTLINE_SIZE,
  ICON_SEARCH_OUTLINE,
  ICON_SEARCH_OUTLINE_SIZE,
  POTASSIUM_IN_MGRAM,
  PROTEIN_IN_GRAM,
  SEARCH,
  SEARCH_RETURN_TYPE,
  SODIUM_IN_MGRAM,
  SUGAR_IN_GRAM,
} from '../../constants/constants';

const COLORS = {
  white: '#fff',
  blackForSearchHeading: '#0D0D0D',
  placeholderTextColor: '#666',
  mealImage: '#EFF3F6',
  addToCartGreen: '#91C788',
};

const SearchScreen = () => {
  // All the states are here
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cross, setCross] = useState(true);

  // All the refs are here
  const searchRef = useRef();

  // effect's are here
  useEffect(() => {
    query == '' && !searchRef.current.focus();
    const delayDebounceFn = setTimeout(() => {
      console.log(query);
      searchResult();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  // All the functions are here
  const searchResult = () => {
    query == '' && searchRef.current.focus();
    setLoading(true);
    setCross(false);
    const options = {
      method: 'GET',
      url: BASE_URL_NUTRITION + query,
      //   params: {query: 'tomato'},
      headers: {
        'X-Api-Key': X_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(`Response`);
        // console.log(response);
        // console.log(`Response data items`);
        // console.log(response.data.items);
        setData(response.data.items);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const firstLetter = name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const emptyTheTextInput = () => {
    setQuery('');
    setCross(!false);
  };

  const saveMealName = async item => {
    try {
      const mealName = await AsyncStorage.getItem('mealName');
      console.log(`MealName`);
      console.log(mealName);
      const parsedJsonMealName = mealName ? JSON.parse(mealName) : {};
      //Object
      const oye = item.name;
      parsedJsonMealName[oye] = item;
      console.log(parsedJsonMealName);
      await AsyncStorage.setItem(
        'mealName',
        JSON.stringify(parsedJsonMealName),
      );
      ToastAndroid.show(ADD_TO_FAVOURITES_TOAST, ToastAndroid.SHORT);

      // get krwa ke dekhne ke lie
      // const mealName1 = await AsyncStorage.getItem('mealName');
      // console.log(`MealName1`);
      // console.log(mealName1);
    } catch (error) {
      console.log(`Error is:`);
      console.log(error);
    }
  };

  // this if for to remove the items from the key 'mealName'
  // const saveMealName = async item => {
  //   await AsyncStorage.removeItem('mealName');
  // };

  const onAddToMeal = async item => {
    const foodDataByDate = await AsyncStorage.getItem('foodDataByDate');
    const parsedFoodDataByDate = foodDataByDate
      ? JSON.parse(foodDataByDate)
      : {};

    const itemName = item.name;
    const final = {[itemName]: item};

    const today = new Date().toISOString().slice(0, 10); // get today's date

    if (parsedFoodDataByDate[today]) {
      // If data for the current date already exists, add the new object to the array
      parsedFoodDataByDate[today].push(final);
    } else {
      // If there is no data for the current date, create a new array with the new object
      parsedFoodDataByDate[today] = [final];
    }

    await AsyncStorage.setItem(
      'foodDataByDate',
      JSON.stringify(parsedFoodDataByDate),
    );

    ToastAndroid.show(ADD_TO_MEAL_LIST_TOAST, ToastAndroid.SHORT);

    // get krwa ke dekhne ke lie
    const foodDataByDate1 = await AsyncStorage.getItem('foodDataByDate');
    // console.log(`foodDataByDate1`);
    // console.log(foodDataByDate1);
  };

  // this if for to remove the items from the key 'foodDataByDate'
  // const onAddToMeal = async item => {
  //   await AsyncStorage.removeItem('foodDataByDate');
  // };

  const renderItems = ({item}) => {
    // console.log(`Console`);
    // console.log(item);
    const onPressAddToFavourites = () => {
      saveMealName(item);
    };
    const onPressAddToMeal = () => {
      onAddToMeal(item);
    };
    return (
      <>
        <View style={styles.mealDetailsParentContainer}>
          <View style={styles.mealDetailsContainer}>
            <Text style={styles.mealName}>{firstLetter(item.name)}</Text>
          </View>
          <View style={styles.nutrientDetailsContainer}>
            <View style={styles.nutrientDetailsRowOne}>
              <View style={[styles.nutrientContainer]}>
                <Text style={styles.nutrientHeading}>{CALORIES}</Text>
                <Text style={styles.nutrientValue}>{item.calories}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>{CARBS_IN_GRAM}</Text>
                <Text style={styles.nutrientValue}>
                  {item.carbohydrates_total_g}
                </Text>
              </View>
              <View style={[styles.nutrientContainer]}>
                <Text style={styles.nutrientHeading}>
                  {CHOLESTROL_IN_MGRAM}
                </Text>
                <Text style={styles.nutrientValue}>{item.cholesterol_mg}</Text>
              </View>
            </View>
            <View style={styles.nutrientDetailsRowOne}>
              <View style={[styles.nutrientContainer]}>
                <Text style={styles.nutrientHeading}>{FAT_IN_GRAM}</Text>
                <Text style={styles.nutrientValue}>{item.fat_total_g}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>{FIBER_IN_GRAM}</Text>
                <Text style={styles.nutrientValue}>{item.fiber_g}</Text>
              </View>
              <View style={[styles.nutrientContainer]}>
                <Text style={styles.nutrientHeading}>{POTASSIUM_IN_MGRAM}</Text>
                <Text style={styles.nutrientValue}>{item.potassium_mg}</Text>
              </View>
            </View>
            <View style={styles.nutrientDetailsRowOne}>
              <View style={[styles.nutrientContainer]}>
                <Text style={styles.nutrientHeading}>{PROTEIN_IN_GRAM}</Text>
                <Text style={styles.nutrientValue}>{item.protein_g}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>{SODIUM_IN_MGRAM}</Text>
                <Text style={styles.nutrientValue}>{item.sodium_mg}</Text>
              </View>
              <View style={[styles.nutrientContainer]}>
                <Text style={styles.nutrientHeading}>{SUGAR_IN_GRAM}</Text>
                <Text style={styles.nutrientValue}>{item.sugar_g}</Text>
              </View>
            </View>
          </View>

          <View style={styles.addToCartContainer}>
            <TouchableOpacity
              style={[
                styles.addToCartButton,
                {
                  marginLeft: 40,
                },
              ]}
              onPress={onPressAddToFavourites}>
              <Text style={styles.addToCartText}>{FAVOURITES_BUTTON_TEXT}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.addToCartButton,
                {
                  marginRight: 40,
                },
              ]}
              onPress={onPressAddToMeal}>
              <Text style={styles.addToCartText}>{ADD_TO_MEAL_TEXT}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="transparent" />
      <View style={styles.searchScreenContainer}>
        <View style={styles.searchHeadingContainer}>
          <Text style={styles.searchHeading}>{SEARCH}</Text>
        </View>
        <View style={styles.textInputParentContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={SEARCH}
              placeholderTextColor={COLORS.placeholderTextColor}
              returnKeyType={SEARCH_RETURN_TYPE}
              onChangeText={setQuery}
              blurOnSubmit={true}
              value={query}
              ref={searchRef}
              onSubmitEditing={searchResult}></TextInput>

            {query == '' ? (
              <TouchableOpacity onPress={searchResult}>
                <Ionicons
                  name={ICON_SEARCH_OUTLINE}
                  size={ICON_SEARCH_OUTLINE_SIZE}></Ionicons>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={emptyTheTextInput}>
                <Ionicons
                  name={ICON_CLOSE_OUTLINE}
                  size={ICON_CLOSE_OUTLINE_SIZE}></Ionicons>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {loading ? (
          data?.length > 0 ? (
            cross ? (
              <SearchZero text={'Search about your meal'} />
            ) : query == '' ? (
              <SearchZero text={'Search about your meal'} />
            ) : (
              <>
                <FlatList
                  ListHeaderComponent={
                    <View style={styles.mealImgContainer}>
                      {/* <Image
                      style={styles.mealImg}
                      source={require(`../../assets/images/meal.png`)}
                    /> */}
                      <Text
                        style={{
                          fontSize: 18,
                          alignSelf: 'center',
                          marginTop: 25,
                          fontFamily: 'Signika-Regular',
                          color: COLORS.blackForSearchHeading,
                        }}>
                        Your intake details
                      </Text>
                    </View>
                  }
                  data={data}
                  renderItem={renderItems}
                />
              </>
            )
          ) : query == '' ? (
            <SearchZero text={'Search about your meal'} />
          ) : (
            <SearchZero text={'No Result Found'} />
          )
        ) : (
          <SearchZero text={'Search about your meal'} />
        )}
      </View>
    </>
  );
};

export default SearchScreen;
