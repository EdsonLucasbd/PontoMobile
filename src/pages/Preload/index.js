import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import { Container, LoadigIcon } from './styles';
import { useNavigation } from '@react-navigation/native'

import auth from '@react-native-firebase/auth';

const Preload = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const navigation = useNavigation();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    navigation.navigate('Login');
  } else {
    navigation.reset({
      routes:[{name: 'TabRoutes'}]
    });
  }

  return (
    <Container>
      <Image source={require('../../assets/pontoIconLight.png')}/>
      <LoadigIcon size='large' color='#DBEFFF'/>
    </Container>
  );
}

export default Preload;