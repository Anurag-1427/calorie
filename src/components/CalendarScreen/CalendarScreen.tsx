import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

const COLORS = {
  white: '#fff',
  blackForSearchHeading: '#0D0D0D',
};

const CalendarScreen = () => {
  // All the states are here
  const [selectedDate, setSelectedDate] = useState('');
  const [mealDataByDate, setMealDataByDate] = useState([]);

  // Get the data with the help of async storage with previously 'add to meal' from SearchScreen
  const getDataByDate = async () => {
    const foodDataByDate = await AsyncStorage.getItem('foodDataByDate');
    const parsedFoodDataByDate = JSON.parse(foodDataByDate);
    console.log('parsedFoodDataByDate');
    setMealDataByDate(parsedFoodDataByDate);
    console.log(mealDataByDate);
    // console.log(parsedFoodDataByDate['2023-05-08']);
  };

  useEffect(() => {
    getDataByDate();
  }, []);

  // Get the data by date:  by pressing on any date in calendar
  const onDayPress = day => {
    setSelectedDate(day.dateString);
    const mealDataForSelectedDate = mealDataByDate[day.dateString];
    if (mealDataForSelectedDate) {
      console.log('mealDataForSelectedDate');
      console.log(mealDataForSelectedDate);
    } else {
      console.log('No meal saved');
    }
  };

  const firstLetter = name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const getMealDataForDate = date => {
    if (mealDataByDate && mealDataByDate[date]) {
      return mealDataByDate[date].map(meal => {
        return Object.keys(meal).map(foodName => {
          return (
            // <View key={foodName}>
            //   <Text>{foodName}</Text>
            //   <Text>Calories: {meal[foodName].calories}</Text>
            //   <Text>Serving size (g): {meal[foodName].serving_size_g}</Text>
            //   {/* Display other nutrition data as needed */}
            // </View>
            <View style={styles.mealDetailsParentContainer} key={foodName}>
              <View style={styles.mealDetailsContainer}>
                <Text style={styles.mealName}>{firstLetter(foodName)}</Text>
              </View>
              <View style={styles.nutrientDetailsContainer}>
                <View style={styles.nutrientDetailsRowOne}>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Calories</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].calories}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Carbs (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].carbohydrates_total_g}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Cholestrol (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].cholesterol_mg}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Sat. Fat (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].fat_saturated_g}
                    </Text>
                  </View>
                </View>
                <View style={styles.nutrientDetailsRowOne}>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Fat (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].fat_total_g}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Fiber (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].fiber_g}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Potassium (mg)</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].potassium_mg}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Protein (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].protein_g}
                    </Text>
                  </View>
                </View>
                <View style={styles.nutrientDetailsRowOne}>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Serving Size (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].serving_size_g}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Sodium (mg)</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].sodium_mg}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>Sugar (g)</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].sugar_g}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        });
      });
    } else {
      return (
        <View style={{alignItems: 'center', marginTop: 150}}>
          <Text>No meal data</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarHeadingContainer}>
        <Text style={styles.calendarHeading}>Calendar</Text>
      </View>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{[selectedDate]: {selected: true}}}
      />

      <View style={styles.mealDataContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          {getMealDataForDate(selectedDate)}
        </ScrollView>
      </View>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  calendarHeadingContainer: {
    // borderColor: '#000',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 45,
  },
  calendarHeading: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500,
    color: COLORS.blackForSearchHeading,
  },
  mealDataContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    flex: 1,
  },

  mealDetailsParentContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
    marginBottom: 20,
    // backgroundColor: COLORS.white,
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
});
