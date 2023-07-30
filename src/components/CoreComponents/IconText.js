import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconsBar from '../DetailScreenComponents/IconsBar'

const IconText = ({iconName,title}) => {
  return (
    <View className='items-center '>
<Icon name={iconName} color='white' size={30}/>
<Text className='text-gray-400 text-center'>{title}</Text>
    </View>
  )
}

export default IconText

const styles = StyleSheet.create({})