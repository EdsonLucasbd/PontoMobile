import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Preload from '../pages/Preload';
import Login from '../pages/Login';
import MainRoutes from './MainRoutes';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '278514425620-n4kvod1p6106scnpvj9q1ddp7ed3h8b7.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
    }}
    >
      <Stack.Screen 
        name="Preload" 
        component={Preload} 
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen 
        name="MainRoutes" 
        component={MainRoutes} 
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthRoutes;