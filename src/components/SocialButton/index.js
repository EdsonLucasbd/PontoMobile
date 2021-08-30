import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonContainer, SocialButtonStyle } from './styles';

const SocialButton = ({iconName, bgColor, onPress, btnText}) => {
  // const handlePress = () => onPress;

  return (
    <ButtonContainer>
      <SocialButtonStyle onPress={() => onPress()} bgColor={bgColor}> 
        <Icon
          name={iconName}
          color='#f8f8f8'
          size={18}
        />
        <Text style={{fontFamily: 'Sora-Light', fontSize: 12, color:'#fff', paddingLeft: 15}}>
          {btnText}
        </Text>
      </SocialButtonStyle>
    </ButtonContainer>
  );
}

export default SocialButton;