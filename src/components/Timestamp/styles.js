import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 0.8;
  /* align-items: center; */
  /* justify-content: center; */
  /* background-color: ${({theme}) => theme.colors.secundaryText}; */
  `;

export const ButtonsContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  /* background-color: '#f00'; */
`;

export const StopButtonsContainer = styled.SafeAreaView`
  flex-direction: row;
  width: 235px;
  align-items: center;
  justify-content: space-between;
  /* background-color: #777; */
`;

export const CurrentDay = styled.Text`
  font-family: ${({theme}) => theme.fonts.light};
  font-size: 18px;
  color: #000;
  margin: 10px;
  border-bottom-width: 1px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${({theme}) => theme.colors.secundary};
`;

export const TimeItem = styled.Text`
  font-family: ${({theme}) => theme.fonts.rajSemiBold};
  font-size: 18px;
  margin-left: 10px;
`;