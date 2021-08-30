import React from 'react';
import SocialButton from '../../components/SocialButton';
import { Container, MyLogo } from './styles';

import onGoogleButtonPress from '../../services/googleLogin';

const Login = ({navigation}) => {

  return (
    <Container>
      <MyLogo source={require('../../assets/pontoLogo.png')}/>
      <SocialButton 
        iconName='google' 
        bgColor='#D93025' 
        btnText='Acessar com Google'
        onPress={onGoogleButtonPress}
      />
      {/* <SocialButton 
        iconName='facebook' 
        bgColor='#4867AA' 
        btnText='Acessar com Facebook'
      /> */}
    </Container>
  );
}

export default Login;