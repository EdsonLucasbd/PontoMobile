import React from 'react';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components';

import { Container } from './styles';

const BottomTabButton = ({ focused, iconName }) => {
  const theme = useTheme();
  
  return (
    <Container style={focused && styles.shadow} bgColor= {focused ? theme.colors.secundaryText : 'transparent'}>
      {iconName !== 'person'
        ? <MaterialCommunityIcons name={iconName} size={24} color={focused ? theme.colors.primary : theme.colors.iconNotSelected}/>
        : <MaterialIcons name={iconName} size={24} color={focused ? theme.colors.primary : theme.colors.iconNotSelected}/>
      }
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 2
  }
});

export default BottomTabButton;