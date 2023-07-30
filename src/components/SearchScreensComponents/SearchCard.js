import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import PIcon from '../CoreComponents/PIcon'
import { images } from '../../utils/constants'


const SearchCard = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex-row justify-between items-center'>
<View className='flex-row items-center' style={{gap:10}}>
<Image source={{uri:images.dailyTrend}} className=' w-28 h-16 rounded-lg  '/>
      <Text className='text-white text-lg font-semibold'>The Witcher</Text>
</View>
      <PIcon name={'play-circle-outline'} color={'white'} size={30}/>
    </TouchableOpacity>
  )
}

export default SearchCard

const styles = StyleSheet.create({})