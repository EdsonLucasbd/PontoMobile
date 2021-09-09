import React from 'react';
import { StyleSheet } from 'react-native';
// import { useContext } from 'react';
import { View } from 'react-native';
// import { CountDownContext } from '../contexts/CountDownContext';
import { TimerContainer, NumbersContainer, NumberRight, NumberLeft, Separator, CountDownButton } from './styles';

const Timer = () => {
  /* const { 
    hasFinished, 
    minutes, 
    seconds, 
    isActive, 
    resetCountDown, 
    startCountDown 
  } = useContext(CountDownContext); */

  // const [minuteLeft, minuteRight] = String(minutes).padStart(2, '<Text>0</Text>').split('');
  // const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <View>
      <TimerContainer>
        <NumbersContainer style={styles.timerShadow}>
          <NumberLeft>0</NumberLeft>
          <NumberRight>0</NumberRight>
        </NumbersContainer>
        <Separator>:</Separator>
        <NumbersContainer style={styles.timerShadow}>
          <NumberLeft>0</NumberLeft>
          <NumberRight>0</NumberRight>
        </NumbersContainer>
      </TimerContainer>

        {/* {hasFinished ? (
          <CountDownButton 
          disabled
          >
            Ciclo encerrado
            <img className={styles.buttonIcons} src="/icons/check.svg" alt="check icon"/>
          </CountDownButton>
        ) : (
          <>
            {isActive ? (
              <button 
                type="button" 
                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                onClick={resetCountDown}
              >
                Abandonar ciclo
                <p className={styles.buttonIcons}>✖</p>
              </button>
            ) : (
                <button 
                type="button" 
                className={styles.countDownButton}
                onClick={startCountDown}
                >
                  Iniciar um ciclo 
                  <p className={styles.buttonIcons}>▶</p>
                </button>
              )
            }
          </>
        )} */}
    </View>
  )
}

const styles = StyleSheet.create({
  timerShadow: {
    elevation: 2
  }
});

export default Timer;