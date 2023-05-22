import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CameraFoodScreen from '../components/CameraFoodScreen/CameraFoodScreen';
import SearchScreen from '../components/SearchScreen/SearchScreen';
import Favourites from '../components/Favourites/Favourites';
import CalendarScreen from '../components/CalendarScreen/CalendarScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../components/ProfileScreen/ProfileScreen';
import routes from '../routes';
import {
  ICON_BOOKMARK,
  ICON_BOOKMARK_OUTLINE,
  ICON_CALENDAR,
  ICON_CALENDAR_OUTLINE,
  ICON_CAMERA,
  ICON_CAMERA_OUTLINE,
  ICON_SEARCH,
  ICON_SEARCH_OUTLINE,
  ICON_PERSON,
  ICON_PERSON_OUTLINE,
} from '../constants/constants';

const COLORS = {
  splashGreen: '#91C788',
};
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: 'Signika-Regular',
        },
        tabBarActiveTintColor: COLORS.splashGreen,
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name={routes.Search.path}
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons
                name={ICON_SEARCH}
                size={30}
                color={COLORS.splashGreen}></Ionicons>
            ) : (
              <Ionicons name={ICON_SEARCH_OUTLINE} size={25}></Ionicons>
            ),
        }}
      />
      <Tab.Screen
        name={routes.Favourites.path}
        component={Favourites}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons
                name={ICON_BOOKMARK}
                size={30}
                color={COLORS.splashGreen}></Ionicons>
            ) : (
              <Ionicons name={ICON_BOOKMARK_OUTLINE} size={25}></Ionicons>
            ),
        }}
      />
      <Tab.Screen
        name={routes.Calendar.path}
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons
                name={ICON_CALENDAR}
                size={30}
                color={COLORS.splashGreen}
              />
            ) : (
              <Ionicons name={ICON_CALENDAR_OUTLINE} size={25} />
            ),
        }}
      />
      <Tab.Screen
        name={routes.Camera.path}
        component={CameraFoodScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons
                name={ICON_CAMERA}
                size={30}
                color={COLORS.splashGreen}
              />
            ) : (
              <Ionicons name={ICON_CAMERA_OUTLINE} size={25} />
            ),
        }}
      />
      {/* <Tab.Screen
        name={routes.Profile.path}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name={ICON_PERSON} size={30} color={COLORS.splashGreen} />
            ) : (
              <Ionicons name={ICON_PERSON_OUTLINE} size={25} />
            ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
