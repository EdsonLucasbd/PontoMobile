import React, { useContext } from 'react';
import SocialButton from '../../components/SocialButton';
import { Container, MyLogo } from './styles';

import onGoogleButtonPress from '../../services/googleLogin';
import { AuthContext } from '../../routes/AuthProvider';

import firestore from '@react-native-firebase/firestore';

const Login = () => {
  const {googleLogin, facebookLogin} = useContext(AuthContext);

  const googleHandleClick = () => {

  }

  return (
    <Container>
      <MyLogo source={require('../../assets/pontoLogo.png')}/>
      <SocialButton 
        iconName='google' 
        bgColor='#D93025' 
        btnText='Acessar com Google'
        onPress={googleLogin}
      />
      <SocialButton 
        iconName='facebook' 
        bgColor='#4867AA' 
        btnText='Acessar com Facebook'
        onPress={facebookLogin}
      />
    </Container>
  );
}

export default Login;