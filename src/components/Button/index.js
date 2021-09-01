import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const CustomButton = ({style, icon, buttonText, textColor, onPress}) => {
  const {iconName, iconSize, iconColor} = icon;
  
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => onPress()}>
      { icon !== '' 
        && <FontAwesome
            style={{marginRight: 12}}
            name={iconName}
            size={iconSize}
            color={iconColor !== undefined ? iconColor : '#F8F8F8'}
          />
      }
      <Text style={textColor !== undefined ? {color: textColor} : {color: '#F8F8F8'}}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  }
})

export default CustomButton;