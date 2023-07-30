import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PIcon from '../CoreComponents/PIcon'
import Avatar from '../CoreComponents/Avatar'
import { images } from '../../utils/constants'

const DetailScreenHeader = () => {
  return (
    <View className='flex-row justify-between p-4'>
  <PIcon name={'arrow-back'} color={'white'} size={25}/>
  <Avatar image={images.avatarImages}/>
    </View>
  )
}

export default DetailScreenHeader

const styles = StyleSheet.create({})