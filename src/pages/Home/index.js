import React, {useState, useEffect, useContext} from 'react';
import { Image, Text, View } from 'react-native';
import {useTheme} from 'styled-components';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { Container } from './styles';
import { AuthContext } from '../../routes/AuthProvider';
import UserAvatar from '../../components/UserAvatar';
import CustomButton from '../../components/CustomButton';
import Timestamp from '../../components/Timestamp';


const Home = () => {
  
  return (
    <Container>
      <UserAvatar />
      <Timestamp />
    </Container>
  );
}

export default Home;