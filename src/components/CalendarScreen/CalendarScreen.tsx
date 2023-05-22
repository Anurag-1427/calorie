import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './calendarStyles';
import {
  FOOD_DATA_BY_DATE,
  ICON_CALENDAR_OUTLINE,
  ICON_CALENDAR_OUTLINE_SIZE,
  CALENDAR,
  NO_DATA_IN_CALENDAR,
  REFRESH_DATA,
  CALORIES,
  CARBS_IN_GRAM,
  CHOLESTROL_IN_MGRAM,
  FAT_IN_GRAM,
  FIBER_IN_GRAM,
  POTASSIUM_IN_MGRAM,
  PROTEIN_IN_GRAM,
  SODIUM_IN_MGRAM,
  SUGAR_IN_GRAM,
  NO_MEAL_DATA,
  CHOOSE_DATE_WISELY,
} from '../../constants/constants';

const CalendarScreen = () => {
  // This state leads to refresh the screen
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getDataByDate();
    }, 2000);
  }, []);

  // All the states are here
  const [selectedDate, setSelectedDate] = useState('');
  const [mealDataByDate, setMealDataByDate] = useState([]);

  // Get the data with the help of async storage with previously 'add to meal' from SearchScreen
  const getDataByDate = async () => {
    const foodDataByDate = await AsyncStorage.getItem(FOOD_DATA_BY_DATE);
    const parsedFoodDataByDate = JSON.parse(foodDataByDate);
    // console.log('parsedFoodDataByDate');
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
      // console.log('mealDataForSelectedDate');
      // console.log(mealDataForSelectedDate);
    } else {
      // console.log('No meal saved');
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
                  <View
                    style={[
                      styles.nutrientContainer,
                      {borderTopLeftRadius: 24, borderBottomLeftRadius: 24},
                    ]}>
                    <Text style={styles.nutrientHeading}>{CALORIES}</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].calories}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>{CARBS_IN_GRAM}</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].carbohydrates_total_g}
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
                      {CHOLESTROL_IN_MGRAM}
                    </Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].cholesterol_mg}
                    </Text>
                  </View>
                </View>
                <View style={styles.nutrientDetailsRowOne}>
                  <View
                    style={[
                      styles.nutrientContainer,
                      {borderTopLeftRadius: 24, borderBottomLeftRadius: 24},
                    ]}>
                    <Text style={styles.nutrientHeading}>{FAT_IN_GRAM}</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].fat_total_g}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>{FIBER_IN_GRAM}</Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].fiber_g}
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
                      {POTASSIUM_IN_MGRAM}
                    </Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].potassium_mg}
                    </Text>
                  </View>
                </View>
                <View style={styles.nutrientDetailsRowOne}>
                  <View
                    style={[
                      styles.nutrientContainer,
                      {borderTopLeftRadius: 24, borderBottomLeftRadius: 24},
                    ]}>
                    <Text style={styles.nutrientHeading}>
                      {PROTEIN_IN_GRAM}
                    </Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].protein_g}
                    </Text>
                  </View>
                  <View style={styles.nutrientContainer}>
                    <Text style={styles.nutrientHeading}>
                      {SODIUM_IN_MGRAM}
                    </Text>
                    <Text style={styles.nutrientValue}>
                      {meal[foodName].sodium_mg}
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
                    <Text style={styles.nutrientHeading}>{SUGAR_IN_GRAM}</Text>
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
        <View style={styles.noMealDataContainer}>
          <Text style={styles.noMealTextOrDate}>{NO_MEAL_DATA}</Text>
          <Text style={styles.noMealTextOrDate}>{CHOOSE_DATE_WISELY}</Text>
        </View>
      );
    }
  };

  return (
    <ScrollView
      style={styles.scrollViewContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {mealDataByDate ? (
        <ScrollView style={styles.container}>
          <View style={styles.calendarHeadingContainer}>
            <Text style={styles.calendarHeading}>{CALENDAR}</Text>
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
        </ScrollView>
      ) : (
        <View style={styles.container}>
          <View style={styles.calendarHeadingContainer}>
            <Text style={styles.calendarHeading}>{CALENDAR}</Text>
          </View>
          <Calendar />
          <View style={styles.noDataInCalendarContainer}>
            <View style={styles.iconAndTextContainer}>
              <Ionicons
                name={ICON_CALENDAR_OUTLINE}
                size={ICON_CALENDAR_OUTLINE_SIZE}></Ionicons>
              <Text style={styles.noDataInCalendarText}>
                {NO_DATA_IN_CALENDAR}
              </Text>
              <Text style={styles.noDataInCalendarText}>{REFRESH_DATA}</Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default CalendarScreen;
