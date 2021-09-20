import React, { useContext, useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LogOutIcon from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';

import { AuthContext } from '../../routes/AuthProvider';
import { useTheme } from 'styled-components';

import UserAvatar from '../../components/UserAvatar';

import { Container, ImageNameContainer, UserName, EditIconButton, Input, LogoutButton, ButtonText } from './styles';

import CustomButton from '../../components/CustomButton';

const Profile = () => {
 const {user, usersRef, revokeAccess, logout} = useContext(AuthContext);
 const [userData, setUserData] = useState({});
 const [name, setName] = useState();
 const [company, setCompany] = useState();
 const [image, setImage] = useState();
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

   setImage(data.assets[0].uri);
 }

 /* function firebaseUpdate({info}){
   usersRef.doc(user.uid).update({
     
   })
   .then(() => {
    console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
 } */
 
 function checkChanges(){
   try {
    if (name !== undefined && image !== undefined && company !== undefined) {
      usersRef.doc(user.uid).update({
        name,
        image,
        company
      })
      .then(() => {
       console.log("Document successfully written!");
       });
     } else {
      if (name !== undefined){
        usersRef.doc(user.uid).update({
          name
        })
        .then(() => {
         console.log("Name successfully written!");
         })
       }
      if (image !== undefined){
        usersRef.doc(user.uid).update({
        image
      })
      .then(() => {
       console.log("Image successfully written!");
       })
      }
      if (company !== undefined){
        usersRef.doc(user.uid).update({
        company
      })
      .then(() => {
       console.log("Company successfully written!");
       })
     }
    }
   } catch(error) {
      console.error("Error writing document: ", error);
   };
 }

function saveData(){
  checkChanges();
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
      <UserAvatar newImage={image !== undefined ? image : userData.image}/>
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
          onChangeText={setName}
          defaultValue={name !== undefined ? name : userData.fullName}
        />

        <Input 
          placeholder="Empresa"
          placeholderTextColor={theme.colors.secundary}
          onChangeText={setCompany}
          defaultValue={userData.company !== '' ? userData.company : 'Sem empresa'}
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
          <LogOutIcon 
            name='sign-out'
            size={15}
            color={theme.colors.secundary}
          />
          <ButtonText>Sair</ButtonText>
        </LogoutButton>
      </Container>
    </TouchableWithoutFeedback>
  </>
  );
}

export default Profile;