import styled from "styled-components";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageNameContainer = styled.View`
  padding: 22px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: 24px;
  font-family: 'Sora-SemiBold';
  color: ${({theme}) => theme.colors.defaultText};
  padding-left: 20px;
`;

export const EditIconButton = styled.TouchableOpacity`
  padding-top: 9px;
  margin-left: 25px;
  background-color: transparent;
`;

export const Input = styled.TextInput`
  width: 222px;
  height: 47px;
  border-radius: 8px;
  margin-bottom: 43px;
  border: 2px solid ${({theme}) => theme.colors.boxShadow};
  padding-left: 11px;
  background-color: ${({theme}) => theme.colors.secundaryText};
  color: ${({theme}) => theme.colors.secundary};
`;

export const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 222px;
  height: 36px;
  background-color: transparent;
  border: 1px ${({theme}) => theme.colors.boxShadow};
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'Sora-SemiBold';
  color: ${({theme}) => theme.colors.secundary};
`;
