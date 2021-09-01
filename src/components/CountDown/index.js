import { useContext } from 'react';
import { View } from 'react-native';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';

const CountDown = () => {
  const { 
    hasFinished, 
    minutes, 
    seconds, 
    isActive, 
    resetCountDown, 
    startCountDown 
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <View>
      <View className={styles.countDownContainer}>
        <View>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </View>
        <span>:</span>
        <View>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </View>
      </View>

        {hasFinished ? (
          <button 
          disabled
          className={styles.countDownButton}
          >
            Ciclo encerrado
            <img className={styles.buttonIcons} src="/icons/check.svg" alt="check icon"/>
          </button>
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
        )}
    </View>
  )
}

export default CountDown;