import React from 'react';
import { Image, View } from 'react-native';
import { Container, LoadigIcon } from './styles';
import SubLogo from '../../assets/pontoIconLight.svg';

// import { Container } from './styles';

const Preload = () => {
  return (
    <Container>
      {/* <SubLogo width={'100%'} height={160}/> */}
      <Image source={require('../../assets/pontoIconLight.png')}/>
      <LoadigIcon size='large' color='#DBEFFF'/>
    </Container>
  );
}

export default Preload;