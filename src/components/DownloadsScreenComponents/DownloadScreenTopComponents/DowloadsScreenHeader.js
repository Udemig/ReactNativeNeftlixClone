import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PIcon from '../../CoreComponents/PIcon'
import Avatar from '../../CoreComponents/Avatar'
import { useNavigation } from '@react-navigation/native'

const DowloadsScreenHeader = () => {
  const navigation=useNavigation()
  return (
    <View className='flex-row justify-between items-center'>
     <Text className='text-white text-2xl font-bold'>İndirilenler</Text>

     <View className='flex-row justify-between' style={{gap:20}}>
      <PIcon name={'search'} size={25} color={'white'} onPress={()=>navigation.navigate('SearchStackScreen')}/>
      <Avatar/>
     </View>
    </View>
  )
}

export default DowloadsScreenHeader

const styles = StyleSheet.create({})