import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Preload from '../pages/Preload';
import Profile from '../pages/Profile';
import Historic from '../pages/Historic';
import BottomTabButton from '../components/BottomTabButton';

import { MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes() {

  return (
    <Tab.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
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
      //tabBar={props => <CustomTabBar {...props} />}
      
    >
      <Tab.Screen 
        name="Preload" 
        component={Preload} 
      />
      <Tab.Screen 
        name="Login" 
        component={Login} 
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
      <Tab.Screen 
        name="Historic" 
        component={Historic} 
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabButton iconName='file' focused={focused}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}