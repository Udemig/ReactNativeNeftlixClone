import {StatusBar, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './src/navigations/BottomTabNavigation';
import {DataProvider} from './src/context/context';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const theme = 'dark';
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme === 'light' ? '#fff' : '#000',
      }}>
      <StatusBar
        backgroundColor={theme === 'light' ? '#fff' : '#000'}
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <DataProvider>
        <NavigationContainer>
          <BottomTabNavigation />
        </NavigationContainer>
      </DataProvider>
    </SafeAreaView>
  );
};

export default App;
