import { StyleSheet, Text, View,FlatList ,Image} from 'react-native'
import React from 'react'

import { poster } from '../../utils/constants'

const HomeCard = ({categoryTitle}) => {
  return (
    <View className=' justify-center mt-6 '>
      <Text className='text-2xl font-bold text-white ml-1'>{categoryTitle}</Text>
    <FlatList data={poster}
    horizontal
    renderItem={({item})=>{
      return(
        <Image style={{resizeMode:'cover' ,backgroundColor:'red'}} source={{uri:item}} className='h-36 w-32 m-1 rounded' />
      )
    }}
    />
    </View>
  )
}

export default HomeCard

const styles = StyleSheet.create({})