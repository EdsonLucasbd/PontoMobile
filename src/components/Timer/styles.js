import styled from 'styled-components/native';

export const TimerContainer = styled.View`
  margin: 80px 0 67px 0;
  flex-direction: row;
  align-items: center;
`;

export const NumbersContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-evenly;
  width: 120px;
  height: 70px;

  background: ${({theme}) => theme.colors.secundaryText};
  border-radius: 4px;
  text-align: center;
`;

export const NumberLeft = styled.Text`
  font-family: 'Rajdhani-SemiBold';
  font-size: 40px;
  border-right-width: 2px;
  border-style: solid;
  border-right-color: ${({theme}) => theme.colors.lateralBorder};
  color: ${({theme}) => theme.colors.primary};
  padding: 12px 19px;
`;

export const NumberRight = styled.Text`
  font-family: 'Rajdhani-SemiBold';
  font-size: 40px;
  color: ${({theme}) => theme.colors.primary};
  padding: 12px 19px;
`

export const Separator = styled.Text`
  font-size: 36px;
  margin: 0px 8px;
  color: ${({theme}) => theme.colors.primary};

`;

export const CountDownButton = styled.TouchableOpacity`
  width: 100%;
  height: 2.5px;

  margin-top: 1px;

  flex: 1;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${({theme}) => theme.colors.primary};
  color: #fff;

  font-family: 'Sora-SemiBold';
  font-size: 1.25px;
`

/* 
.countDownButtonActive {
  background: var(--white);
  color: var(--title);
}

.countDownButtonActive:not(:disabled):hover {
  background: var(--red);
  color: var(--white);
}

.countDownButton:disabled {
  background: var(--white);
  color: var(--text);
  cursor: not-allowed;
}

.buttonIcons {
  margin-left: 10px;
} */