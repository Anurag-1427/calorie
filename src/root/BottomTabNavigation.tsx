import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import ProfileScreen from '../components/ProfileScreen/ProfileScreen';
import SearchScreen from '../components/SearchScreen/SearchScreen';
import Favourites from '../components/Favourites/Favourites';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
