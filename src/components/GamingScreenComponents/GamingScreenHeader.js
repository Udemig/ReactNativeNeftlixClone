import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderText from '../CoreComponents/HeaderText'
import PIcon from '../CoreComponents/PIcon'
import Avatar from '../CoreComponents/Avatar'

const GamingScreenHeader = () => {
  return (
    <View className='flex-row justify-between items-center p-4' >
 <HeaderText title={'Oyunlar'}/>

 <View className='flex-row items-center' style={{gap:20}}>
    <PIcon name={'search'} size={24} color={'white'}/>
    <Avatar/>
 </View>
    </View>
  )
}

export default GamingScreenHeader

const styles = StyleSheet.create({})