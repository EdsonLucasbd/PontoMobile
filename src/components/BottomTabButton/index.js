import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Container } from './styles';

const BottomTabButton = ({ focused, iconName }) => {
  return (
    <Container bgColor= {focused ? '#DBEFFF' : 'transparent'}>
      {iconName !== 'person'
        ? <MaterialCommunityIcons name={iconName} size={24} color={focused ? '#3E5991' : '#f8f8f840'}/>
        : <MaterialIcons name={iconName} size={24} color={focused ? '#3E5991' : '#f8f8f840'}/>
      }
    </Container>
  );
}

export default BottomTabButton;