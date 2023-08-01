import { StyleSheet, Text, View ,ScrollView } from 'react-native'
import React from 'react'
import GamingScreenHeader from '../../components/GamingScreenComponents/GamingScreenHeader'

import TrendGame from '../../components/GamingScreenComponents/TrendGame'

const GamesScreen = () => {
  return (
    <View className='bg-black flex-1'>
<GamingScreenHeader/>
<View className='flex-1'>

<TrendGame/>

</View>
    </View>
  )
}

export default GamesScreen

const styles = StyleSheet.create({})