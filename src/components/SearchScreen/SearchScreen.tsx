// import {
//   View,
//   Text,
//   StatusBar,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   Image,
//   ScrollView,
//   Pressable,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const COLORS = {
//   white: '#fff',
//   blackForSearchHeading: '#0D0D0D',
//   placeholderTextColor: '#666',
//   mealImage: '#EFF3F6',
//   addToCartGreen: '#91C788',
// };

// const firstLetter = name => {
//   return name.charAt(0).toUpperCase() + name.slice(1);
// };

// const saveMealName = async name => {
//   try {
//     let initialName = {};
//     console.log(`Inital name`);
//     console.log(initialName);
//     await AsyncStorage.setItem('mealName', JSON.stringify(initialName));

//     const mealName = await AsyncStorage.getItem('mealName');
//     const parsedJsonMealName = JSON.parse(mealName);
//     console.log(parsedJsonMealName);
//     // const savedUser = await AsyncStorage.getItem('user');
//     // const currentUser = JSON.parse(savedUser);
//     // console.log(currentUser);
//   } catch (error) {
//     console.log(`Error is:`);
//     console.log(error);
//   }
// };

// const SearchScreen = () => {
// const [data, setData] = useState([]);
// const [query, setQuery] = useState('tomato');

// const searchResult = () => {
//   const options = {
//     method: 'GET',
//     url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
//     //   params: {query: 'tomato'},
//     headers: {
//       'X-Api-Key': '5Dre5zEq8tpfSZi97CGHTQ==k4gRsVuaQ4XuC0DI',
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(`Response`);
//       console.log(response);
//       console.log(`Response data items`);
//       console.log(response.data.items);
//       setData(response.data.items);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };
//   const renderItems = ({item}) => {
//     console.log(`Console`);
//     console.log(item);
//     return (
//       <>
//         <View style={styles.mealDetailsParentContainer}>
//           <View style={styles.mealDetailsContainer}>
//             <Text style={styles.mealName}>{firstLetter(item.name)}</Text>
//           </View>
//           <View
//             // horizontal={true}
//             // showsHorizontalScrollIndicator={false}
//             style={styles.nutrientContainer}>
//             <View style={styles.oneRow}>
//               <View style={styles.nutrientHeadingContainer}>
//                 <Text style={styles.nutrientHeading}>Calories</Text>
//                 <Text style={styles.nutrientValue}>{item.calories}</Text>
//               </View>
//               <View style={styles.nutrientHeadingContainer}>
//                 <Text style={styles.nutrientHeading}>Carbohydrates (g)</Text>
//                 <Text style={styles.nutrientValue}>
//                   {item.carbohydrates_total_g}
//                 </Text>
//               </View>
//               <View style={styles.nutrientHeadingContainer}>
//                 <Text style={styles.nutrientHeading}>Cholesterol (mg)</Text>
//                 <Text style={styles.nutrientValue}>{item.cholesterol_mg}</Text>
//               </View>
//             </View>
//             <View style={styles.secondRow}>
//               <View style={styles.nutrientHeadingContainer}>
//                 <Text style={styles.nutrientHeading}>Saturated Fat (g)</Text>
//                 <Text style={styles.nutrientValue}>{item.fat_saturated_g}</Text>
//               </View>
//               <View style={styles.nutrientHeadingContainer}>
//                 <Text style={styles.nutrientHeading}>Total Fat (g)</Text>
//                 <Text style={styles.nutrientValue}>{item.fat_total_g}</Text>
//               </View>
//               <View style={styles.nutrientHeadingContainer}>
//                 <Text style={styles.nutrientHeading}>Fiber (g)</Text>
//                 <Text style={styles.nutrientValue}>{item.fiber_g}</Text>
//               </View>
//             </View>
//             <View style={styles.thirdRow}>
//               <View style={styles.nutrientHeadingContainer}>
//                 <Text style={styles.nutrientHeading}>Potassium (mg)</Text>
//                 <Text style={styles.nutrientValue}>{item.potassium_mg}</Text>
//               </View>
//               <View style={styles.nutrientHeadingContainer}>
//                 <Text style={styles.nutrientHeading}>Protein (g)</Text>
//                 <Text style={styles.nutrientValue}>{item.protein_g}</Text>
//               </View>
//               <View style={styles.nutrientHeadingContainer}>
//                 <Text style={styles.nutrientHeading}>Serving Size (g)</Text>
//                 <Text style={styles.nutrientValue}>{item.serving_size_g}</Text>
//               </View>
//             </View>
//             <View style={styles.fourthRow}>
//               <View style={styles.nutrientHeadingContainer}>
//                 <Text style={styles.nutrientHeading}>Sodium (mg)</Text>
//                 <Text style={styles.nutrientValue}>{item.sodium_mg}</Text>
//               </View>
//               <View style={styles.nutrientHeadingContainer}>
//                 <Text style={styles.nutrientHeading}>Sugar (g)</Text>
//                 <Text style={styles.nutrientValue}>{item.sugar_g}</Text>
//               </View>
//             </View>
//             {/* <View style={styles.nutrientHeadingContainer}>
//               <Text style={styles.nutrientHeading}>Calories</Text>
//               <Text style={styles.nutrientValue}>{item.calories}</Text>
//             </View>
//             <View style={styles.nutrientHeadingContainer}>
//               <Text style={styles.nutrientHeading}>Carbohydrates (g)</Text>
//               <Text style={styles.nutrientValue}>
//                 {item.carbohydrates_total_g}
//               </Text>
//             </View>
//             <View style={styles.nutrientHeadingContainer}>
//               <Text style={styles.nutrientHeading}>Cholesterol (mg)</Text>
//               <Text style={styles.nutrientValue}>{item.cholesterol_mg}</Text>
//             </View> */}
//             {/* <View style={styles.nutrientHeadingContainer}>
//               <Text style={styles.nutrientHeading}>Saturated Fat (g)</Text>
//               <Text style={styles.nutrientValue}>{item.fat_saturated_g}</Text>
//             </View>
//             <View style={styles.nutrientHeadingContainer}>
//               <Text style={styles.nutrientHeading}>Total Fat (g)</Text>
//               <Text style={styles.nutrientValue}>{item.fat_total_g}</Text>
//             </View>
//             <View style={styles.nutrientHeadingContainer}>
//               <Text style={styles.nutrientHeading}>Fiber (g)</Text>
//               <Text style={styles.nutrientValue}>{item.fiber_g}</Text>
//             </View> */}
//             {/* <View style={styles.nutrientHeadingContainer}>
//               <Text style={styles.nutrientHeading}>Potassium (mg)</Text>
//               <Text style={styles.nutrientValue}>{item.potassium_mg}</Text>
//             </View>
//             <View style={styles.nutrientHeadingContainer}>
//               <Text style={styles.nutrientHeading}>Protein (g)</Text>
//               <Text style={styles.nutrientValue}>{item.protein_g}</Text>
//             </View>
//             <View style={styles.nutrientHeadingContainer}>
//               <Text style={styles.nutrientHeading}>Serving Size (g)</Text>
//               <Text style={styles.nutrientValue}>{item.serving_size_g}</Text>
//             </View> */}
//             {/* <View style={styles.nutrientHeadingContainer}>
//               <Text style={styles.nutrientHeading}>Sodium (mg)</Text>
//               <Text style={styles.nutrientValue}>{item.sodium_mg}</Text>
//             </View>
//             <View style={styles.nutrientHeadingContainer}>
//               <Text style={styles.nutrientHeading}>Sugar (g)</Text>
//               <Text style={styles.nutrientValue}>{item.sugar_g}</Text>
//             </View> */}
//           </View>
//           <TouchableOpacity
//             style={styles.addToCartContainer}
//             onPress={saveMealName(item.name)}>
//             <Text style={styles.addToCartText}>Add To Favorite</Text>
//           </TouchableOpacity>
//         </View>
//       </>
//     );
//   };

//   return (
//     <>
//       <StatusBar backgroundColor="transparent" />
// <View style={styles.searchScreenContainer}>
//   <View style={styles.searchHeadingContainer}>
//     <Text style={styles.searchHeading}>Search</Text>
//   </View>
//   <View style={styles.textInputParentContainer}>
//     <View style={styles.textInputContainer}>
//       <Ionicons name="search-outline" size={18}></Ionicons>

//       <TextInput
//         style={styles.textInput}
//         placeholder="Search"
//         placeholderTextColor={COLORS.placeholderTextColor}
//         returnKeyType="search"
//         onChangeText={setQuery}
//         value={query}
//         onSubmitEditing={searchResult}></TextInput>

//       <TouchableOpacity onPress={searchResult}>
//         <Ionicons name="search-outline" size={18}></Ionicons>
//       </TouchableOpacity>
//     </View>
//   </View>

//         {data ? (
//           <ScrollView>
//             <View style={styles.mealImgContainer}>
//               <Image
//                 style={styles.mealImg}
//                 source={require(`../../assets/meal.png`)}
//               />
//               <Text
//                 style={{
//                   fontSize: 18,
//                   alignSelf: 'center',
//                   color: COLORS.blackForSearchHeading,
//                 }}>
//                 Your intake details
//               </Text>
//             </View>
//             <FlatList data={data} renderItem={renderItems} />
//             {/* <TouchableOpacity style={styles.addToCartContainer}>
//               <Text style={styles.addToCartText}>Add To Favorite</Text>
//             </TouchableOpacity> */}
//           </ScrollView>
//         ) : (
// <View style={styles.shoppingBasketContainer}>
//   <Image
//     style={styles.shoppingBasketImg}
//     source={require('../../assets/shopping-basket.png')}
//   />
//   <View style={styles.taglineContainer}>
//     <Text style={styles.tagline}>Search about your meal</Text>
//   </View>
// </View>
//         )}

//         {/* <View style={styles.shoppingBasketContainer}>
//           <Image
//             style={styles.shoppingBasketImg}
//             source={require('../../assets/shopping-basket.png')}
//           />
//           <View style={styles.taglineContainer}>
//             <Text style={styles.tagline}>Search about your meal</Text>
//           </View>
//         </View> */}
// {/* <View>
//   <View style={styles.mealImgContainer}>
//     <Image
//       style={styles.mealImg}
//       source={require(`../../assets/meal.png`)}
//     />
//     <Text
//       style={{
//         fontSize: 18,
//         alignSelf: 'center',
//         color: COLORS.blackForSearchHeading,
//       }}>
//       Your intake details
//     </Text>
//   </View>
//   <FlatList data={data} renderItem={renderItems} />
//   <TouchableOpacity style={styles.addToCartContainer}>
//     <Text style={styles.addToCartText}>Add To Favorite</Text>
//   </TouchableOpacity>
// </View> */}
//       </View>
//     </>
//   );
// };

// export default SearchScreen;

// const styles = StyleSheet.create({
//   searchScreenContainer: {
//     backgroundColor: COLORS.white,
//     flex: 1,
//   },
//   searchHeadingContainer: {
//     // borderColor: '#000',
//     // borderWidth: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // marginTop: 61,
//     marginTop: 30,
//   },
//   searchHeading: {
//     fontSize: 12,
//     lineHeight: 16,
//     fontWeight: 500,
//     color: COLORS.blackForSearchHeading,
//   },
//   textInputParentContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 32,
//     // borderColor: '#222',
//     // borderWidth: 1,
//   },
//   textInputContainer: {
//     borderColor: '#111',
//     borderWidth: 1, // important
//     width: 327,
//     // width: '85%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 24,
//   },
//   textInput: {
//     // borderColor: '#000',
//     // borderWidth: 1,
//     // borderRadius: 24,
//     width: '80%',
//     height: 64,
//     // fontWeight: 400,
//     fontSize: 16,
//     lineHeight: 20,
//     // marginLeft: '19.2%',
//     // paddingLeft: 25,
//   },
//   placeholderTextStyle: {
//     paddingLeft: '19.2%',
//   },
//   shoppingBasketContainer: {
//     // borderWidth: 1,
//     borderColor: 'black',
//     alignSelf: 'center',
//     width: '100%',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   shoppingBasketImg: {
//     tintColor: 'grey',
//     alignSelf: 'center',
//     // borderWidth: 1,
//     borderColor: 'black',
//   },
//   taglineContainer: {
//     // borderWidth: 1,
//     borderColor: 'black',
//     marginTop: 12,
//   },
//   tagline: {
//     // borderWidth: 1,
//     borderColor: 'black',
//     alignSelf: 'center',
//   },
//   mealImgContainer: {
//     // borderWidth: 1,
//     borderColor: 'black',
//     // flex: 1,
//   },
//   mealImg: {
//     // borderWidth: 1,
//     borderColor: COLORS.mealImage,
//     alignSelf: 'center',
//     marginVertical: 20,
//     height: 200,
//     width: 200,
//     backgroundColor: COLORS.mealImage,
//     borderRadius: 20,
//   },
//   mealDetailsParentContainer: {
//     borderWidth: 1,
//     borderColor: 'black',
//     // height: '100%',
//     marginTop: 15,
//     // flex: 1,
//   },
//   mealDetailsContainer: {},
//   mealName: {
//     fontSize: 25,
//     color: 'black',
//     // alignSelf: 'center',
//     marginLeft: 15,
//   },
//   nutrientContainer: {
//     borderWidth: 1,
//     borderColor: 'black',
//     backgroundColor: '#FFF8EE',
//     height: '50%',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // flexDirection: 'row',
//     marginTop: 8,
//     borderRadius: 15,
//   },
//   oneRow: {
//     flexDirection: 'row',
//   },
//   secondRow: {
//     flexDirection: 'row',
//   },
//   thirdRow: {
//     flexDirection: 'row',
//   },
//   fourthRow: {
//     flexDirection: 'row',
//   },
//   nutrientHeadingContainer: {
//     // borderWidth: 1,
//     borderColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 20,
//   },
//   nutrientHeading: {
//     fontSize: 15,
//     color: '#FF8473',
//     alignSelf: 'center',
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   nutrientValue: {
//     fontSize: 30,
//     color: '#FF8473',
//     alignSelf: 'center',
//   },
// addToCartContainer: {
//   // borderWidth: 1,
//   flex: 1,
//   borderColor: 'black',
//   height: 72,
//   alignItems: 'center',
//   alignSelf: 'center',
//   justifyContent: 'center',
//   backgroundColor: COLORS.addToCartGreen,
//   width: '85%',
//   borderRadius: 24,
//   // position: 'relative',
//   // marginTop: 30,
//   marginVertical: 40,
//   // bottom: 20,
// },
// addToCartText: {
//   // borderWidth: 1,
//   borderColor: 'black',
//   fontSize: 25,
//   color: 'white',
//   fontWeight: 600,
// },
// });

import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const saveMealName = async name => {
    try {
      // let initialName = [];
      // console.log(`Inital name`);
      // console.log(initialName);
      // await AsyncStorage.setItem('mealName', JSON.stringify(initialName));

      const mealName = await AsyncStorage.getItem('mealName');
      const parsedJsonMealName = mealName ? JSON.parse(mealName) : [];
      //Object
      // parsedJsonMealName['mealName'] = name;
      // Object.assign(...parsedJsonMealName, {mealName: name});
      // Object.assign(...parsedJsonMealName, {mealName: name});

      //Array
      parsedJsonMealName.push(name);
      await AsyncStorage.setItem(
        'mealName',
        JSON.stringify(parsedJsonMealName),
      );
      console.log(parsedJsonMealName);
      // const savedUser = await AsyncStorage.getItem('user');
      // const currentUser = JSON.parse(savedUser);
      // console.log(currentUser);
    } catch (error) {
      console.log(`Error is:`);
      console.log(error);
    }
  };

  // whole logic is here:
  //  let initialName = {};  // an empty object
  //  2.   await AsyncStorage.setItem('mealName', JSON.stringify(initialName));
  //  3.   const mealName = await AsyncStorage.getItem('mealName');
  //  4.   const parsedJsonMealName = JSON.parse(mealName);
  //  5.   initialName.push(parsedJsonMealName)
  //  6.   await AsyncStorage.setItem('mealName', JSON.stringify(initialName));

  const renderItems = ({item}) => {
    console.log(`Console`);
    console.log(item);
    const onPressAddToCart = () => {
      saveMealName(item.name);
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
              {/* <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Sat. Fat (g)</Text>
                <Text style={styles.nutrientValue}>{item.fat_saturated_g}</Text>
              </View> */}
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
              {/* <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Potassium (mg)</Text>
                <Text style={styles.nutrientValue}>{item.potassium_mg}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Protein (g)</Text>
                <Text style={styles.nutrientValue}>{item.protein_g}</Text>
              </View> */}
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
            <View style={styles.nutrientDetailsRowOne}>
              {/* <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Sodium (mg)</Text>
                <Text style={styles.nutrientValue}>{item.sodium_mg}</Text>
              </View>
              <View style={styles.nutrientContainer}>
                <Text style={styles.nutrientHeading}>Sugar (g)</Text>
                <Text style={styles.nutrientValue}>{item.sugar_g}</Text>
              </View> */}
            </View>
          </View>

          <View style={styles.addToCartContainer}>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={onPressAddToCart}>
              <Text style={styles.addToCartText}>Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add To Meal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="transparent" />
      <ScrollView style={styles.searchScreenContainer}>
        <View style={styles.searchHeadingContainer}>
          <Text style={styles.searchHeading}>Search</Text>
        </View>
        <View style={styles.textInputParentContainer}>
          <View style={styles.textInputContainer}>
            <Ionicons name="search-outline" size={18}></Ionicons>

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
        {/* <View style={styles.shoppingBasketContainer}>
          <Image
            style={styles.shoppingBasketImg}
            source={require('../../assets/shopping-basket.png')}
          />
          <View style={styles.taglineContainer}>
            <Text style={styles.tagline}>Search about your meal</Text>
          </View>
        </View> */}
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
    // marginTop: 61,
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
    // width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  textInput: {
    // borderColor: '#000',
    // borderWidth: 1,
    // borderRadius: 24,
    width: '80%',
    height: 64,
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    // marginLeft: '19.2%',
    // paddingLeft: 25,
  },
  placeholderTextStyle: {
    paddingLeft: '19.2%',
  },
  shoppingBasketContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginVertical: 250,
  },
  shoppingBasketImg: {
    tintColor: 'grey',
    alignSelf: 'center',
    // borderWidth: 1,
    borderColor: 'black',
  },
  taglineContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 12,
  },
  tagline: {
    // borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
  },
  mealImgContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    // flex: 1,
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
    // height: '100%',
    marginTop: 15,
    marginBottom: 20,
    // flex: 1,
  },
  mealDetailsContainer: {},
  mealName: {
    fontSize: 25,
    color: 'black',
    // alignSelf: 'center',
    marginLeft: 15,
  },
  nutrientDetailsContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
    // backgroundColor: '#FFF8EE',
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
    // marginHorizontal: 5,
    // margin: 5,
    // marginLeft: 10,
    marginVertical: 10,
    backgroundColor: '#FFF8EE',
    borderRadius: 10,
  },
  nutrientHeading: {
    fontSize: 16,
    marginHorizontal: 5,
    // marginLeft: 5,
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
    // height: 72,
    // alignItems: 'center',
    // alignSelf: 'center',
    justifyContent: 'space-around',
    // backgroundColor: COLORS.addToCartGreen,
    width: '100%',
    borderRadius: 24,
    flexDirection: 'row',
    // // position: 'relative',
    // // marginTop: 30,
    // marginVertical: 20,
    // // bottom: 20,
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
