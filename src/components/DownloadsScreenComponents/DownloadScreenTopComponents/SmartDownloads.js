import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PIcon from '../../CoreComponents/PIcon'

const SmartDownloads = () => {
  return (
    <View className='flex-row items-center' style={{gap:10}}>
        <PIcon name={'cog-outline'} color={'#9ca3af'} size={20}/>
      <Text className='text-gray-400'>Akıllı İndirme</Text>
    </View>
  )
}

export default SmartDownloads

const styles = StyleSheet.create({})