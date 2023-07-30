import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NewPopularsScreen from '../AppScreens/NewPopularsScreen'
import SearchScreen from '../AppScreens/SearchScreen'
import DetailScreen from '../AppScreens/DetailScreen'
import SearchStackScreen from './SearchStackScreen'

const NewPopularStackScreen = () => {
    const Ntack=createNativeStackNavigator()
  return (
<Ntack.Navigator screenOptions={{headerShown:false}}>
    <Ntack.Screen name='NewPopularScreen' component={NewPopularsScreen}/>
    <Ntack.Screen name='SearchStackScreen' component={SearchStackScreen}/>

</Ntack.Navigator>
  )
}

export default NewPopularStackScreen
