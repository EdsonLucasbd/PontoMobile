import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.bgColor};
  width: 50px;
  height: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

