import React, { useContext, useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {launchImageLibrary} from 'react-native-image-picker';

import { AuthContext } from '../../routes/AuthProvider';
import { useTheme } from 'styled-components';

import UserAvatar from '../../components/UserAvatar';

import { Container, ImageNameContainer, UserName, EditIconButton, Input, LogoutButton, ButtonText } from './styles';

import firestore from '@react-native-firebase/firestore';

const Profile = () => {
 const {user, revokeAccess, logout} = useContext(AuthContext);
 const [userData, setUserData] = useState({});
 const theme = useTheme();

 function imagePickerCallback(data) {
   console.log(data)
   if(data.didCancel) {
    console.log('The user canceled');
    return;
   }

   if(data.errorCode) {
    console.log('ERROR: ', errorMessage);
    return;
   }

   if(!data.assets[0].uri) {
    console.log('URI not found');
    return;
   }

   setUserData(userData => {
     return {...userData, image: data.assets[0].uri}
   });
 }

 useEffect(() => {
  setUserData({
    firstName: user.displayName.split(' ')[0],
    lastName: user.displayName.split(' ')[1],
    fullName: user.displayName,
    image: user.photoURL,
    company: ''
  });
   
 }, [])

 

 const handleLogout = () => {
   logout()
   revokeAccess();
 }
  return (
  <>
    <ImageNameContainer>
      <UserAvatar newImage={userData.image}/>
      <UserName>Olá, {userData.firstName}</UserName>
      <EditIconButton onPress={() => launchImageLibrary({}, imagePickerCallback)}>
        <Icon name='edit' size={17} color={theme.colors.secundary}>
          <Text style={{fontFamily:'Sora-light', color: theme.colors.secundary}}>Alterar imagem</Text>
        </Icon>
      </EditIconButton>
    </ImageNameContainer>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>

        <Input 
          placeholder="Nome"
          placeholderTextColor={theme.colors.secundary}
        />

        <Input 
          placeholder="Empresa"
          placeholderTextColor={theme.colors.secundary}
        />

        <LogoutButton onPress={handleLogout}>
          <ButtonText>Sair</ButtonText>
        </LogoutButton>
      </Container>
    </TouchableWithoutFeedback>
  </>
  );
}

export default Profile;