import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchZero from './SearchZero';

const COLORS = {
  white: '#fff',
  blackForSearchHeading: '#0D0D0D',
  placeholderTextColor: '#666',
  mealImage: '#EFF3F6',
  addToCartGreen: '#91C788',
};

const SearchScreen = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  const searchResult = () => {
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
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Calories</Text>
                <Text style={styles.nutrientValue}>{item.calories}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Carbs (g)</Text>
                <Text style={styles.nutrientValue}>
                  {item.carbohydrates_total_g}
                </Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Cholestrol (g)</Text>
                <Text style={styles.nutrientValue}>{item.cholesterol_mg}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Sat. Fat (g)</Text>
                <Text style={styles.nutrientValue}>{item.fat_saturated_g}</Text>
              </View>
            </View>
            <View style={styles.nutrientDetailsRowOne}>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Fat (g)</Text>
                <Text style={styles.nutrientValue}>{item.fat_total_g}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Fiber (g)</Text>
                <Text style={styles.nutrientValue}>{item.fiber_g}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Potassium (mg)</Text>
                <Text style={styles.nutrientValue}>{item.potassium_mg}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Protein (g)</Text>
                <Text style={styles.nutrientValue}>{item.protein_g}</Text>
              </View>
            </View>
            <View style={styles.nutrientDetailsRowOne}>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Serving Size (g)</Text>
                <Text style={styles.nutrientValue}>{item.serving_size_g}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Sodium (mg)</Text>
                <Text style={styles.nutrientValue}>{item.sodium_mg}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Sugar (g)</Text>
                <Text style={styles.nutrientValue}>{item.sugar_g}</Text>
              </View>
            </View>
          </View>

          <View style={styles.addToCartContainer}>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={onPressAddToFavourites}>
              <Text style={styles.addToCartText}>Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={onPressAddToMeal}>
              <Text style={styles.addToCartText}>Add To Meal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  // console.log(data);
  return (
    <>
      <StatusBar backgroundColor="transparent" />
      <ScrollView style={styles.searchScreenContainer}>
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
              value={query}
              onSubmitEditing={searchResult}></TextInput>

            <TouchableOpacity onPress={searchResult}>
              <Ionicons name="search-outline" size={18}></Ionicons>
            </TouchableOpacity>
          </View>
        </View>

        {data?.length === 0 ? (
          <SearchZero />
        ) : (
          <View>
            <View style={styles.mealImgContainer}>
              <Image
                style={styles.mealImg}
                source={require(`../../assets/meal.png`)}
              />
              <Text
                style={{
                  fontSize: 18,
                  alignSelf: 'center',
                  color: COLORS.blackForSearchHeading,
                }}>
                Your intake details
              </Text>
            </View>
            <FlatList data={data} renderItem={renderItems} />
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchScreenContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  searchHeadingContainer: {
    // borderColor: '#000',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  searchHeading: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500,
    color: COLORS.blackForSearchHeading,
  },
  textInputParentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    // borderColor: '#222',
    // borderWidth: 1,
  },
  textInputContainer: {
    borderColor: '#111',
    borderWidth: 1, // important
    width: 327,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  textInput: {
    width: '80%',
    height: 64,
    fontSize: 16,
    lineHeight: 20,
  },
  placeholderTextStyle: {
    paddingLeft: '19.2%',
  },
  mealImgContainer: {
    // borderWidth: 1,
    borderColor: 'black',
  },
  mealImg: {
    // borderWidth: 1,
    borderColor: COLORS.mealImage,
    alignSelf: 'center',
    marginVertical: 20,
    height: 200,
    width: 200,
    backgroundColor: COLORS.mealImage,
    borderRadius: 20,
  },
  mealDetailsParentContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
    marginBottom: 20,
  },
  mealDetailsContainer: {},
  mealName: {
    fontSize: 25,
    color: 'black',
    marginLeft: 15,
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
  addToCartContainer: {
    // borderWidth: 1,
    // flex: 1,
    borderColor: 'black',
    justifyContent: 'space-around',
    width: '100%',
    borderRadius: 24,
    flexDirection: 'row',
  },
  addToCartButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.addToCartGreen,
    borderRadius: 24,
  },
  addToCartText: {
    // borderWidth: 1,
    height: 72,
    paddingTop: 17,
    paddingHorizontal: 25,
    justifyContent: 'center',
    borderColor: 'black',
    fontSize: 25,
    borderRadius: 24,
    color: 'white',
    justifyContent: 'center',
    fontWeight: 600,
  },
});
