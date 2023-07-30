import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const ChangerItem = ({onPress,title,changer}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    className={`border-t ${
      changer === title ? 'border-red-800' : null
    } border-t-4 items-center justify-center w-24 `}>
    <Text className="text-white mt-1" style={{fontSize:18}}>{title}</Text>
  </TouchableOpacity>
  )
}

export default ChangerItem

const styles = StyleSheet.create({})