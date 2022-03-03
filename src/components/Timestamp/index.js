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

  const [timeList, setTimeList] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isLunch, setIsLunch] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isFinishable, setIsFinishable] = useState(false);
  var date = new Date();
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
        try {
          // set timestamp
          timeSheetRef.doc(user.uid).update({
            createdAt: firestore.FieldValue.serverTimestamp()
          })
          timeSheetRef.doc(user.uid).set({data: arr}, {merge: true})
        } catch (error) {
          console.error('ERROR', error)
        }
      }
    });
    setTimeList([]);
    const newArr = arr.length = 0;
    return newArr;
  }

  function handleStartClick(){
    setIsStarted(true)
    pushList(types[0])
  }
  function handleFinishClick(){
    setIsStarted(false)
    setIsFinishable(false)
    setIsLunch(false)
    setIsStopped(false)
    pushList(types[1])
    clearArray(timeList)
  }
  function handleLunchClick(){
    setIsLunch(true)
    setIsFinishable(true)
    pushList(types[2])
  }
  function handleStopClick(){
    setIsStopped(true)
    pushList(types[3])
  }
  function handleResumeClick(){
    setIsLunch(false)
    setIsStopped(false)
    pushList(types[4])
  }

  const formattedTime = format(
    date, 'kk:mm:ss'
  )

  function pushList(typeName){
    console.log(typeName, timeList)
    let newTimeList = {};
    newTimeList.time = formattedTime;
    newTimeList.type = typeName;
    setTimeList([
      ...timeList,
      newTimeList
    ])
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
        extraData={timeList}
        ItemSeparatorComponent={() => <Separator/>}
      />
        {renderButtons()}
        
    </Container>
  );
}

export default Timestamp;