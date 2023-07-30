import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchScreenHeader from '../../components/SearchScreensComponents/SearchScreenHeader'
import SearchCard from '../../components/SearchScreensComponents/SearchCard'
import { useNavigation } from '@react-navigation/native'

const SearchScreen = () => {
const navigation=useNavigation()
  return (
    <View className='flex-1 bg-black '>
   <SearchScreenHeader/>
 <View className='p-2'>
 <Text className='text-white font-bold my-2'>En Çok Arananlar</Text>
 <SearchCard onPress={()=>navigation.navigate('DetailScreen')}/>
 </View>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})