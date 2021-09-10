import React, { useContext, useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {launchImageLibrary} from 'react-native-image-picker';

import { AuthContext } from '../../routes/AuthProvider';
import { useTheme } from 'styled-components';

import UserAvatar from '../../components/UserAvatar';

import { Container, ImageNameContainer, UserName, EditIconButton, Input, LogoutButton, ButtonText } from './styles';

import CustomButton from '../../components/CustomButton';

const Profile = () => {
 const {user, usersRef, revokeAccess, logout} = useContext(AuthContext);
 const [userData, setUserData] = useState({});
 const [newName, setNewName] = useState(null);
 const [newCompany, setNewCompany] = useState(null);
 const [newImage, setNewImage] = useState(null);
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

   setNewImage(data.assets[0].uri);
 }

 async function saveData(){
   await usersRef.doc(user.uid).set({
     name: newName,
     image: newImage,
     company: newCompany
   }, { merge: true })
   .then(() => {
    console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
 }

 useEffect(() => {
  usersRef.doc(user.uid).onSnapshot(doc => {
    const { image, name, company } = doc.data();

    setUserData({
      firstName: name.split(' ')[0],
      lastName: name.split(' ')[1],
      fullName: name,
      image,
      company
    });
    
  });
   
 }, []);
 

 

 const handleLogout = () => {
   logout()
   revokeAccess();
 }
  return (
  <>
    <ImageNameContainer>
      <UserAvatar newImage={newImage !== null ? newImage : userData.image}/>
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
          onChangeText={setNewName}
        />

        <Input 
          placeholder="Empresa"
          placeholderTextColor={theme.colors.secundary}
          onChangeText={setNewCompany}
        />

        <CustomButton 
          style={{
            width: 222, 
            height: 50,
            backgroundColor: theme.colors.primary,
          }}
          icon={{
            iconName:'save', 
            iconSize: 15,
          }}
          buttonText={'Salvar alterações'}
          onPress={saveData}
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