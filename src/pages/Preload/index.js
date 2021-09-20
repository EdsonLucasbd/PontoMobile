import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';
import { AuthContext } from '../../routes/AuthProvider';
import { Container, LoadigIcon } from './styles';

const Preload = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={require('../../assets/pontoIconLight.png')}/>
      <LoadigIcon size='large' color='#DBEFFF'/>
    </Container>
  );
}

export default Preload;