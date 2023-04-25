import React, { useEffect, useState } from 'react'

// Imports related to Navigation
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

// Screens
import SplashScreen from '../components/Splash Screen/SplashScreen';
import OnBoardingScreen from '../components/Onboarding Screen/OnBoardingScreen';

const index = () => {
    // Stack for navigation purposes
    const Stack = createStackNavigator();

    // States
    const [showSplashScreen, setShowSplashScreen] = useState(true);

    // Use effects
    useEffect(()=>{
        setTimeout(()=>{
            setShowSplashScreen(false)
        }, 4000)
    }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Splash Screen */}
        {showSplashScreen ? <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown: false}} /> : null }

        {/* On Boarding Screen */}
        <Stack.Screen name='OnBoarding Screen' component={OnBoardingScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default index