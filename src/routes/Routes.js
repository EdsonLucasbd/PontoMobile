import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { StatusBar, StyleSheet } from 'react-native';

import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';

import { AuthContext, AuthProvider } from './AuthProvider';
import { ThemeProvider } from 'styled-components';

import theme from '../global/theme';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

    return (
      <ThemeProvider theme={theme}>
        <NavigationContainer style={styles.container}>
          <StatusBar style='auto' />
          {user ? <MainRoutes/> : <AuthRoutes/> }
        </NavigationContainer>
      </ThemeProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Routes;
