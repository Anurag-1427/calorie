import { View, Text, StyleSheet, StatusBar, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LottieView from 'lottie-react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar hidden={true} />
      <Text style={styles.calCountText}>calCount</Text>
      <FadeInView style={styles.lottieAnimationContainer}>
            <LottieView style={styles.lottieAnimation} source={require('../../assets/Lotties Animation/85391-stopwatch.json')} autoPlay loop
      />
      </FadeInView>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#91C788',
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    calCountText: {
        fontSize: 47,
        color: '#fff',
    },
    lottieAnimationContainer: {
        borderColor: '#000',
        // borderWidth: 1,
    },
    lottieAnimation: {
        width: '25%',
        // height: '25%',
    },
})