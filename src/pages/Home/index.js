import React, {useState, useEffect} from 'react';
import { Image, View } from 'react-native';

import { Container } from './styles';

const Home = ({ route }) => {
  // const { userImage } = route.params
  /* useEffect(() => {
    getCurrentUser = async () => {
      const currentUser = await GoogleSignin.getCurrentUser();
      return setUser(currentUser);
    };
  }, []) */
  
  return (
    <Container>
      {/* <Image source={userImage}/> */}
    </Container>
  );
}

export default Home;