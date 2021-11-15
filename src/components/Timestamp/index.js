import React, {useEffect, useState, useContext} from 'react';
import { FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { useTheme } from 'styled-components';
import { AuthContext } from '../../routes/AuthProvider';

import CustomButton from '../CustomButton';

import { 
  ButtonsContainer, 
  Container, 
  CurrentDay, 
  Separator, 
  StopButtonsContainer, 
  TimeItem 
} from './styles';

import { 
  format, 
  getDate,
  getDay,
  getMonth,
  getYear,
  getHours,
  getMinutes,
  getSeconds,
} from 'date-fns';

import pt from 'date-fns/locale/pt-BR';

const Timestamp = () => {
  const theme = useTheme();
  const { user, timeSheetRef } = useContext(AuthContext);

  // const [type, setType] = useState('');
  const [timeList, setTimeList] = useState([]);
  // const myList = [];
  const [isStarted, setIsStarted] = useState(false);
  const [isLunch, setIsLunch] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isFinishable, setIsFinishable] = useState(false);
  var date = new Date();
  // const day = getDate(date);
  // const weekDay = getDay(date);
  // const month = getMonth(date);
  // const year = getYear(date);
  const types = [
    'Inicio de jornada',
    'Fim de jornada',
    'Almoço',
    'Inicio de pausa',
    'Retorno'
  ]
  const formattedDate = format(
    date, 
    "EEEE, dd 'de' MMMM 'de' yyyy",
    {locale: pt}
  );

  const renderItem = ({item}) => (
    <TimeItem>
      • {item.time} - {item.type}
    </TimeItem>
  );

  function clearArray(arr) {
    // timeSheetRef.doc(user.uid).set({data: arr}, {merge: true})
    timeSheetRef.doc(user.uid).get().then((document) => {
      if(document.exists) {
        // set timestamp
        timeSheetRef.doc(user.uid).update({
          createdAt: firestore.FieldValue.serverTimestamp()
        })
        timeSheetRef.doc(user.uid).set({data: arr}, {merge: true})
      }
    });
    setTimeList([]);
    const newArr = arr.length = 0;
    return newArr;
  }

  function handleStartClick(){
    //setType(types[0])
    setIsStarted(true)
    pushList(types[0])
    console.log('inicio jornada', timeList)
  }
  function handleFinishClick(){
    //setType('Fim de jornada')
    setIsStarted(false)
    setIsFinishable(false)
    setIsLunch(false)
    setIsStopped(false)
    pushList(types[1])
    clearArray(timeList)
    console.log('fim jornada', timeList)
  }
  function handleLunchClick(){
    //setType('Almoço')
    setIsLunch(true)
    setIsFinishable(true)
    pushList(types[2])
    console.log('inicio almoço', timeList)
  }
  function handleStopClick(){
    //setType('Inicio de pausa')
    setIsStopped(true)
    pushList(types[3])
    console.log('inicio pausa', timeList)
  }
  function handleResumeClick(){
    //setType('Retorno')
    setIsLunch(false)
    setIsStopped(false)
    pushList(types[4])
    console.log('fim pausa', timeList)
  }

  const formattedTime = format(
    date, 'kk:mm:ss'
  )


  function pushList(typeName){
    let newTimeList = {};
    newTimeList.time = formattedTime;
    newTimeList.type = typeName;
    setTimeList((prev) => {
      return [...prev, newTimeList]
    })
  }

  function renderButtons(){
    if(isStarted){
      if (isLunch || isStopped){
        return(
          <ButtonsContainer>
            <CustomButton 
              style={{
                width: 206, 
                height: 82,
                backgroundColor: theme.colors.primary,
              }}
              icon={{iconName: 'caret-left', iconSize: 15}}
              buttonText={'Retornar'}
              onPress={handleResumeClick}
            />
          </ButtonsContainer>
        )
      }
      if (isFinishable){
        return(
          <ButtonsContainer>
            <CustomButton 
              style={{
                width: 103, 
                height: 82,
                backgroundColor: theme.colors.bgSecundaryButton,
                flexDirection: 'column',
              }}
              icon={{iconName: 'hand-stop-o', iconSize: 15, iconColor: theme.colors.defaultText}}
              buttonText={'Pausa rápida'}
              textColor={ theme.colors.defaultText }
              onPress={handleStopClick}
            />
            <CustomButton 
              style={{
                width: 206, 
                height: 82,
                backgroundColor: theme.colors.primary,
              }}
              icon={{iconName: 'close', iconSize: 15}}
              buttonText={'Finalizar jornada'}
              onPress={handleFinishClick}
            />
          </ButtonsContainer>
        )
      }
      return(
        <ButtonsContainer>
            <StopButtonsContainer>
              <CustomButton 
                style={{
                  width: 103, 
                  height: 82,
                  backgroundColor: theme.colors.lunchButton,
                  flexDirection: 'column',
                }}
                icon={{iconName: 'cutlery', iconSize: 15}}
                buttonText={'Almoço'}
                onPress={handleLunchClick}
              />
              <CustomButton 
                style={{
                  width: 103, 
                  height: 82,
                  backgroundColor: theme.colors.bgSecundaryButton,
                  flexDirection: 'column',
                }}
                icon={{iconName: 'hand-stop-o', iconSize: 15, iconColor: theme.colors.defaultText}}
                buttonText={'Pausa rápida'}
                textColor={ theme.colors.defaultText }
                onPress={handleStopClick}
              />
            </StopButtonsContainer>
            <CustomButton 
              style={{
                width: 206, 
                height: 82,
                backgroundColor: theme.colors.primary,
              }}
              icon={{iconName: 'close', iconSize: 15}}
              buttonText={'Finalizar jornada'}
              onPress={handleFinishClick}
            />
          </ButtonsContainer>
      )
    } else {
      return(
        <ButtonsContainer>
          <CustomButton 
            style={{
              width: 206, 
              height: 82,
              backgroundColor: theme.colors.primary,
            }}
            icon={{iconName: 'play', iconSize: 15}}
            buttonText={'Iniciar jornada'}
            onPress={handleStartClick}
          />
        </ButtonsContainer>
      )
    }
  }

  return (
    <Container>
      <CurrentDay>{formattedDate}</CurrentDay>
      <FlatList 
        data={timeList} 
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Separator/>}
      />
        {renderButtons()}
        
    </Container>
  );
}

export default Timestamp;