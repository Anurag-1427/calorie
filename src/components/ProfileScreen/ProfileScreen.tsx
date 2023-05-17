import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

// related to auth
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  // const logout = async () => {
  //   const signout = await auth().signOut();
  //   console.log(signout);
  //   console.log('User signed out!!!');
  // };
  const navigator = useNavigation();
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    navigator.navigate('Login');
  };
  return (
    <View style={{flex: 1, justifyContent: 'space-around'}}>
      <Text style={{alignSelf: 'center'}}>Profile</Text>
      <TouchableOpacity
        onPress={logout}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '70%',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 24,
        }}>
        <Text style={{padding: 15}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
