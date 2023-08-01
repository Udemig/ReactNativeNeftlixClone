import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DownloadsScreenTop from '../../components/DownloadsScreenComponents/DownloadScreenTopComponents/DownloadsScreenTop'
import DownloadsScreenBottom from '../../components/DownloadsScreenComponents/DownloadsScreenBottomComponents/DownloadsScreenBottom'
const DownloadsScreen = () => {
  return (
    <View style={{flex:1}} className='bg-black'>
     <DownloadsScreenTop/>
     <DownloadsScreenBottom/>
    </View>
  )
}

export default DownloadsScreen

const styles = StyleSheet.create({})