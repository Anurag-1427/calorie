import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './profileStyles';

// related to auth
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigator = useNavigation();
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    navigator.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>Profile Page</Text>
      <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
        <Text style={styles.logoutBtnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
