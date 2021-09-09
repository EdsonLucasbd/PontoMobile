import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Historic from '../pages/Historic';
import BottomTabButton from '../components/BottomTabButton';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const MainRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute', 
          borderTopLeftRadius: 20, 
          borderTopRightRadius: 20, 
          height: 58, 
          backgroundColor: '#3E5991', 
          borderTopColor: 'transparent',
          paddingTop: 5,
          paddingBottom: 5,
        }
      }}
    >
      <Tab.Screen 
        name="Historic" 
        component={Historic} 
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabButton iconName='file' focused={focused}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabButton iconName='home' focused={focused}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabButton iconName='person' focused={focused}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainRoutes;