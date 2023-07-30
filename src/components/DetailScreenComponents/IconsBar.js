import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconText from '../CoreComponents/IconText'

const IconsBar = () => {
  return (
    <View className='flex-row items-center justify-between px-8'>
<IconText iconName={'add'} title={'Listem'}/>
<IconText iconName={'thum-up'} title={'Puan Ver'}/>
<IconText iconName={'share'} title={'Paylaş'}/>
<IconText iconName={'file-download'} title={`İndir \n(1.sezon)`}/>
    </View>
  )
}

export default IconsBar

const styles = StyleSheet.create({})