import React, { useContext, useState, useEffect } from 'react';
import { Image, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../../routes/AuthProvider';

import { Container, UserImage } from './styles';

const UserAvatar = ({newImage}) => {
  const [userImage, setUserImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {user, usersRef} = useContext(AuthContext);
  useEffect(() => {
    return usersRef.doc(user.uid).onSnapshot(doc => {
        const { image } = doc.data();
        setUserImage(image);
        if (isLoading) {
          setIsLoading(false);
        };
      });
  },[])

  return (
    <Container style={styles.avatarShadow}>
      {
        isLoading 
        ? <ActivityIndicator size='large' color='#DBEFFF'/>
        :  userImage !== null 
          ? <UserImage source={{uri: userImage}}/>
          : <Icon name='user-circle-o' size={168} color='#8798AD' />
      }
    </Container>
  );
}

const styles = StyleSheet.create({
  avatarShadow: {
    elevation: 3,
  }
})

export default UserAvatar;