import React, {useState, useEffect, useContext} from 'react';
import { Image, Text, View } from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { Container } from './styles';
import { AuthContext } from '../../routes/AuthProvider';
import UserAvatar from '../../components/UserAvatar';
import CustomButton from '../../components/Button';

const Home = () => {
  //const {user} = useContext(AuthContext);
  // const [user, setUser] = useState(null);
  /* useEffect(() => {
    const getCurrentUser = async () => {
      const currentUser = await GoogleSignin.getCurrentUser();
      setUser(currentUser);
    };
    getCurrentUser();
  }, []); */
  
  //const { photo } = user.user;
  
  //console.log('DADOS 2: ', photo)
  
  return (
    <Container>
      <UserAvatar />
      <CustomButton 
        style={{
          width: 206, 
          height: 82,
          backgroundColor: '#3E5991',
        }}
        icon=''
        buttonText={'Iniciar jornada'}
        onPress={() => {}}
      />
      {/* <Image source={{uri:{photo},}}/> */}
      {/* <Text>Olá! {user.uid}</Text> */}
    </Container>
  );
}

export default Home;