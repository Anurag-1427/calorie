import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar hidden={true} />
      <Text style={styles.calCountText}>calCount</Text>
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
    },
    calCountText: {
        fontSize: 47,
        color: '#fff',
    }
})