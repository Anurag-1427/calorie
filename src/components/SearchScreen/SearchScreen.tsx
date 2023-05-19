import {
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  ToastAndroid,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchZero from './SearchZero';
import {styles} from './searchScreenStyles';

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

  // All the refs are here
  const searchRef = useRef();

  // All the functions are here
  const searchResult = () => {
    query == '' && searchRef.current.focus();
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
      //   params: {query: 'tomato'},
      headers: {
        'X-Api-Key': '5Dre5zEq8tpfSZi97CGHTQ==k4gRsVuaQ4XuC0DI',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(`Response`);
        console.log(response);
        console.log(`Response data items`);
        console.log(response.data.items);
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
      ToastAndroid.show('Added to favourites', ToastAndroid.SHORT);

      // get krwa ke dekhne ke lie
      const mealName1 = await AsyncStorage.getItem('mealName');
      console.log(`MealName1`);
      console.log(mealName1);
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

    ToastAndroid.show('Added to meal list', ToastAndroid.SHORT);

    // get krwa ke dekhne ke lie
    const foodDataByDate1 = await AsyncStorage.getItem('foodDataByDate');
    console.log(`foodDataByDate1`);
    console.log(foodDataByDate1);
  };

  // this if for to remove the items from the key 'foodDataByDate'
  // const onAddToMeal = async item => {
  //   await AsyncStorage.removeItem('foodDataByDate');
  // };

  const renderItems = ({item}) => {
    console.log(`Console`);
    console.log(item);
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
              <View
                style={[
                  styles.nutrientContainer,
                  // {borderTopLeftRadius: 24, borderBottomLeftRadius: 24},
                ]}>
                <Text style={styles.nutrientHeading}>Calories</Text>
                <Text style={styles.nutrientValue}>{item.calories}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Carbs (g)</Text>
                <Text style={styles.nutrientValue}>
                  {item.carbohydrates_total_g}
                </Text>
              </View>
              <View
                style={[
                  styles.nutrientContainer,
                  // {
                  //   borderTopRightRadius: 24,
                  //   borderBottomRightRadius: 24,
                  // },
                ]}>
                <Text style={styles.nutrientHeading}>Cholestrol (mg)</Text>
                <Text style={styles.nutrientValue}>{item.cholesterol_mg}</Text>
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
                  // {borderTopLeftRadius: 24, borderBottomLeftRadius: 24},
                ]}>
                <Text style={styles.nutrientHeading}>Fat (g)</Text>
                <Text style={styles.nutrientValue}>{item.fat_total_g}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Fiber (g)</Text>
                <Text style={styles.nutrientValue}>{item.fiber_g}</Text>
              </View>
              <View
                style={[
                  styles.nutrientContainer,
                  // {
                  //   borderTopRightRadius: 24,
                  //   borderBottomRightRadius: 24,
                  // },
                ]}>
                <Text style={styles.nutrientHeading}>Potassium (mg)</Text>
                <Text style={styles.nutrientValue}>{item.potassium_mg}</Text>
              </View>
            </View>
            <View style={styles.nutrientDetailsRowOne}>
              <View
                style={[
                  styles.nutrientContainer,
                  // {borderTopLeftRadius: 24, borderBottomLeftRadius: 24},
                ]}>
                <Text style={styles.nutrientHeading}>Protein (g)</Text>
                <Text style={styles.nutrientValue}>{item.protein_g}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Sodium (mg)</Text>
                <Text style={styles.nutrientValue}>{item.sodium_mg}</Text>
              </View>
              <View
                style={[
                  styles.nutrientContainer,
                  // {
                  //   borderTopRightRadius: 24,
                  //   borderBottomRightRadius: 24,
                  // },
                ]}>
                <Text style={styles.nutrientHeading}>Sugar (g)</Text>
                <Text style={styles.nutrientValue}>{item.sugar_g}</Text>
              </View>
            </View>
          </View>

          <View style={styles.addToCartContainer}>
            <TouchableOpacity
              style={[
                styles.addToCartButton,
                {
                  marginLeft: 12,
                },
              ]}
              onPress={onPressAddToFavourites}>
              <Text style={styles.addToCartText}>Favourite</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.addToCartButton,
                {
                  marginRight: 12,
                },
              ]}
              onPress={onPressAddToMeal}>
              <Text style={styles.addToCartText}>Add Meal</Text>
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
          <Text style={styles.searchHeading}>Search</Text>
        </View>
        <View style={styles.textInputParentContainer}>
          <View style={styles.textInputContainer}>
            {/* <Ionicons name="search-outline" size={18}></Ionicons> */}

            <TextInput
              style={styles.textInput}
              placeholder="Search"
              placeholderTextColor={COLORS.placeholderTextColor}
              returnKeyType="search"
              onChangeText={setQuery}
              blurOnSubmit={true}
              value={query}
              ref={searchRef}
              onSubmitEditing={searchResult}></TextInput>

            {query == '' ? (
              <TouchableOpacity onPress={searchResult}>
                <Ionicons name="search-outline" size={18}></Ionicons>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={emptyTheTextInput}>
                <Ionicons name="close-outline" size={18}></Ionicons>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {loading ? (
          data?.length > 0 ? (
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
          ) : query == '' ? (
            <SearchZero text={'Enter the valid search'} />
          ) : query.length > 0 ? (
            <SearchZero text={'Search about your meal'} />
          ) : (
            <></>
          )
        ) : (
          <SearchZero text={'Search about your meal'} />
        )}
      </View>
    </>
  );
};

export default SearchScreen;
