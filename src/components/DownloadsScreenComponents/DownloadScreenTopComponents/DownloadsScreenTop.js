import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DowloadsScreenHeader from './DowloadsScreenHeader'
import SmartDownloads from './SmartDownloads'

const DownloadsScreenTop = () => {
  return (
    <View className='p-5' style={{gap:30}}>
  <DowloadsScreenHeader/>
  <SmartDownloads/>
    </View>
  )
}

export default DownloadsScreenTop

const styles = StyleSheet.create({})