import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../AppScreens/SearchScreen'
import DetailScreen from '../AppScreens/DetailScreen'

const SearchStackScreen = () => {
    const SearchStack=createNativeStackNavigator()
  return (
 <SearchStack.Navigator screenOptions={{headerShown:false}}>
    <SearchStack.Screen name='SearchScreen' component={SearchScreen} />
    <SearchStack.Screen name='DetailScreen' component={DetailScreen}/>
 </SearchStack.Navigator>
  )
}

export default SearchStackScreen

const styles = StyleSheet.create({})