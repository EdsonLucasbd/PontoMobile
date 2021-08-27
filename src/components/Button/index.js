import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const CustomButton = ({style, icon, buttonText, textColor, onPress}) => {
  const {iconName, iconSize, iconColor} = icon;
  
  return (
    <TouchableOpacity style={style} onPress={() => onPress()}>
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

export default CustomButton;