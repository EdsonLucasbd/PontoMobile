import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './styles';

const UserAvatar = () => {
  return (
    <Container style={styles.avatarShadow}>
      <Icon name='user-circle-o' size={168} color='#8798AD' />
    </Container>
  );
}

const styles = StyleSheet.create({
  avatarShadow: {
    elevation: 3,
  }
})

export default UserAvatar;