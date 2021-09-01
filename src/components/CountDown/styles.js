import styled from 'styled-components/native';

export const countDownContainer = styled.View`
  flex: 1;
  align-items: center;
  font-family: 'Rajdhani-SemiBold';
  color: #3E5991;
`;

.countDownContainer > div {
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: var(--white);
  box-shadow: 0 0 60px var(--box-shadow);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;
}

.countDownContainer > div span {
  flex: 1;
}

.countDownContainer > div span:first-child {
  border-right: 1px solid var(--lateral-border);
}

.countDownContainer > div span:last-child {
  border-left: 1px solid var(--lateral-border);
}

.countDownContainer > span {
  font-size: 6.25rem;
  margin: 0 0.5rem;
}

.countDownButton {
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;
}

/* Se o botão não estiver desabilitado, fazer o hover */
.countDownButton:not(:disabled):hover {
  background: var(--blue-dark);
}

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
}