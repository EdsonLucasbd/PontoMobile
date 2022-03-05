import React, {useState, useContext} from 'react';
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

import { format } from 'date-fns';

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
    const daily_dot = {}
    arr.map((val) => {
      daily_dot[`${val.type}`] = val
    })
    // timeSheetRef.doc(user.uid).set({data: arr}, {merge: true})
    timeSheetRef.doc(user.uid).get().then((document) => {
      if(document.exists) {
        try {
          // set timestamp
          // timeSheetRef.doc(user.uid).set({dot_markings: arr}, {merge: true})
          // .then(() => {
          //   timeSheetRef.doc(user.uid).update({
          //     createdAt: firestore.FieldValue.serverTimestamp(),
          //     dot_markings: firestore.FieldValue.arrayUnion(arr)
          //   })
          // })
          timeSheetRef.doc(user.uid).update({
            createdAt: firestore.FieldValue.serverTimestamp(),
            dot_markings: firestore.FieldValue.arrayUnion(daily_dot)
          })
        } catch (error) {
          console.error('ERROR', error)
        }
      }
    });
    setTimeList([]);
    const newArr = arr.length = 0;
    return newArr;
  }

  function handleClickStart(){
    setIsStarted(true)
    pushList(types[0])
  }
  function handleClickFinish(){
    setIsStarted(false)
    setIsFinishable(false)
    setIsLunch(false)
    setIsStopped(false)
    pushList(types[1])
    clearArray(timeList)
  }
  function handleClickLunch(){
    setIsLunch(true)
    setIsFinishable(true)
    pushList(types[2])
  }
  function handleClickStop(){
    setIsStopped(true)
    pushList(types[3])
  }
  function handleClickResume(){
    setIsLunch(false)
    setIsStopped(false)
    pushList(types[4])
  }

  const formattedTime = format(
    date, 'kk:mm:ss'
  )

  function pushList(typeName){
    let newTimeList = {};
    newTimeList.time = formattedTime;
    newTimeList.type = typeName;
    
    setTimeList([
      ...timeList,
      newTimeList
    ])
    console.log(typeName, timeList)
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
              onPress={handleClickResume}
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
              onPress={handleClickStop}
            />
            <CustomButton 
              style={{
                width: 206, 
                height: 82,
                backgroundColor: theme.colors.primary,
              }}
              icon={{iconName: 'close', iconSize: 15}}
              buttonText={'Finalizar jornada'}
              onPress={handleClickFinish}
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
                onPress={handleClickLunch}
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
                onPress={handleClickStop}
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
              onPress={handleClickFinish}
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
            onPress={handleClickStart}
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