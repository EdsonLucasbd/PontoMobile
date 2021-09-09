import React, { useContext, useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../../routes/AuthProvider';

import { Container, UserImage } from './styles';

const UserAvatar = ({newImage}) => {
  const [userImage, setUserImage] = useState(null);
  const {user} = useContext(AuthContext);
  useEffect(() => {
    setUserImage(newImage);
  },[])

  return (
    <Container style={styles.avatarShadow}>
      {
        user !== null 
        ? <UserImage source={{uri: userImage !== null
          ? userImage
          : user.photoURL
        }}/>
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