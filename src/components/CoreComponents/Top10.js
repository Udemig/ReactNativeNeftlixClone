import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { images } from '../../utils/constants'

const Top10 = () => {
  return (
    <View>
 <Image style={{height:25,width:25, borderRadius:6}} source={{uri:images.top10}}/>
    </View>
  )
}

export default Top10

const styles = StyleSheet.create({})