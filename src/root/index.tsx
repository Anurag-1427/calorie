import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Imports related to Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import SplashScreen from '../components/SplashScreen/SplashScreen';
// import OnBoardingScreen from '../components/OnboardingScreen/OnBoardingScreen';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import OnBoardScreen from '../components/OnboardingScreen/OnBoardScreen';

const index = () => {
  // Stack for navigation purposes
  const Stack = createStackNavigator();

  // States
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  // Use effects
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
  }, []);

  useEffect(() => {
    async function appData() {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
    }
    appData();
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator>
          {/* Splash Screen */}
          {showSplashScreen ? (
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
          ) : null}

          {/* On Boarding Screen */}
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnBoardingScreen"
              component={OnBoardScreen}
              options={{headerShown: false}}
            />
          )}
          {/* <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardScreen}
          options={{headerShown: false}}
        /> */}
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default index;
