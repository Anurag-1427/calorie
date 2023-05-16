import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CameraFoodScreen from '../components/CameraFoodScreen/CameraFoodScreen';
import SearchScreen from '../components/SearchScreen/SearchScreen';
import Favourites from '../components/Favourites/Favourites';
import CalendarScreen from '../components/CalendarScreen/CalendarScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../components/ProfileScreen/ProfileScreen';

const COLORS = {
  splashGreen: '#91C788',
};
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // labelStyle: {
        //   fontSize: 12,
        //   color: COLORS.splashGreen,
        // },
        tabBarActiveTintColor: COLORS.splashGreen,
        tabBarInactiveTintColor: 'grey',
      }}>
      {/* screenOptions={{tabBarShowLabel: false}}*/}
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons
                name="search"
                size={30}
                color={COLORS.splashGreen}></Ionicons>
            ) : (
              <Ionicons name="search-outline" size={25}></Ionicons>
            ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons
                name="bookmark"
                size={30}
                color={COLORS.splashGreen}></Ionicons>
            ) : (
              <Ionicons name="bookmark-outline" size={25}></Ionicons>
            ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="calendar" size={30} color={COLORS.splashGreen} />
            ) : (
              <Ionicons name="calendar-outline" size={25} />
            ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraFoodScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="camera" size={30} color={COLORS.splashGreen} />
            ) : (
              <Ionicons name="camera-outline" size={25} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="person" size={30} color={COLORS.splashGreen} />
            ) : (
              <Ionicons name="person-outline" size={25} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
