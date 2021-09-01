import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import Routes from './src/routes/Routes';
import TabRoutes from './src/routes/mainTabs';
import { AuthProvider } from './src/routes/AuthProvider';

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


    return (
      <AuthProvider>
        <NavigationContainer style={styles.container}>
          <StatusBar style='auto' />
          {user ? <TabRoutes/> : <Routes/> }
        </NavigationContainer>
      </AuthProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
