import React, { useContext } from 'react';
import { Button, View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AuthContext } from '../../routes/AuthProvider';

// import { Container } from './styles';

const Profile = ({navigation}) => {
 const {revokeAccess, logout} = useContext(AuthContext);

 const handleLogout = () => {
   logout()
   revokeAccess();
 }
  return (
  <View>
    <Button title='Sair' onPress={handleLogout}/>
  </View>
  );
}

export default Profile;