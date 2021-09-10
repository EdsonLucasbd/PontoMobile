import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomButton = ({style, icon, buttonText, textColor, onPress}) => {
  const {iconName, iconSize, iconColor} = icon;
  
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => onPress()}>
      { icon !== '' 
        && <Icon
            style={{marginRight: 12}}
            name={iconName}
            size={iconSize  !== undefined ? iconSize : 12}
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
    marginBottom: 27,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  }
})

export default CustomButton;