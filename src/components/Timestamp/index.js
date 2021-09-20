import React, {useEffect, useState} from 'react';
import { FlatList, Text } from 'react-native';
import { useTheme } from 'styled-components';
import CustomButton from '../CustomButton';

import { Container, CurrentDay, TimeItem } from './styles';

import { 
  parseISO, 
  format, 
  formatRelative, 
  formatDistance,
  getDayOfYear,
  getDate,
  getDay,
  getMonth,
  getYear,
  getHours,
  getMinutes,
  getSeconds,
  parse
} from 'date-fns';

import pt from 'date-fns/locale/pt-BR';

const Timestamp = () => {
  const theme = useTheme();
  const [timeList, setTimeList] = useState([]);
  var date = new Date();
  const day = getDate(date);
  const weekDay = getDay(date);
  const month = getMonth(date);
  const year = getYear(date);

  const formattedDate = format(
    date, 
    "EEEE, dd 'de' MMMM 'de' yyyy",
    {locale: pt}
  );

  const formattedTime = format(
    date, "kk:mm:ss"
  )

  const renderItem = ({item}) => (
    <TimeItem>{item}</TimeItem>
  );

  function handleButtonClick(){
    setTimeList([...formattedTime, formattedTime])
  }

 

  return (
    <Container>
      <CurrentDay>{formattedDate}</CurrentDay>
      <FlatList data={timeList} renderItem={renderItem}/>
      <CustomButton 
        style={{
          width: 206, 
          height: 82,
          backgroundColor: theme.colors.primary,
        }}
        icon={{iconName: 'play', iconSize: 15}}
        buttonText={'Iniciar jornada'}
        onPress={handleButtonClick}
      />
    </Container>
  );
}

export default Timestamp;