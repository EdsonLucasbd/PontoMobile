import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../pages/Preload';
import Login from '../pages/Login';
import TabRoutes from './mainTabs';


const Stack = createStackNavigator();

export default function Routes() {

  return (
    <Stack.Navigator
      initialRouteName="Preload"
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
        name="TabRoutes" 
        component={TabRoutes} 
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}