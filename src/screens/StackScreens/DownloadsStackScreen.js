import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DownloadsScreen from '../AppScreens/DownloadsScreen'
import SearchStackScreen from './SearchStackScreen'

const DownloadsStackScreen = () => {

    const DownloadsStack=createNativeStackNavigator()
  return (
<DownloadsStack.Navigator screenOptions={{headerShown:false}}>
    <DownloadsStack.Screen name='DownloadsScreen' component={DownloadsScreen}/>
    <DownloadsStack.Screen name='SearchStackScreen' component={SearchStackScreen} />
</DownloadsStack.Navigator>
  )
}

export default DownloadsStackScreen

const styles = StyleSheet.create({})