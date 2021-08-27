import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  margin-bottom: 30px;
`;

export const SocialButtonStyle = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 52px; 
  width: 225px; 
  padding-left: 30px;
  background-color: ${props => props.bgColor};
  border-radius: 8px;
`;
