import React from 'react';
import { View, Text, Image } from 'react-native';
import SocialButton from '../../components/SocialButton';
import { Container, MyLogo } from './styles';


// import { Container } from './styles';

const Login = () => {

  return (
    <Container>
      <MyLogo source={require('../../assets/pontoLogo.png')}/>
      <SocialButton 
        iconName='google' 
        bgColor='#D93025' 
        btnText='Acessar com Google'
      />
      <SocialButton 
        iconName='facebook' 
        bgColor='#4867AA' 
        btnText='Acessar com Facebook'
      />
    </Container>
  );
}

export default Login;