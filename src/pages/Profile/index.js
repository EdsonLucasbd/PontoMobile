import React from 'react';
import { Button, View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// import { Container } from './styles';

const Profile = ({navigation}) => {
 const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      navigation.navigate('Login')
      //this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  return (
  <View>
    <Button title='Sair' onPress={signOut}/>
  </View>
  );
}

export default Profile;