import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import HeaderText from '../../CoreComponents/HeaderText'
import LightContentText from '../../CoreComponents/LightContentText'
import DownloadsPoster from './DownloadsPoster'
import SpecialButton from '../../CoreComponents/SpecialButton'


const DownloadsScreenBottom = () => {
  return (
    <View className='px-4' style={{gap:15}}>
  <HeaderText title={'Sizin İçin İndirilenler Özelliğini Etkinliştirin'}></HeaderText>
  <LightContentText content={'Her zaman izleyecek bir şeyleriniz olsun diye tamamen size özel seçtiğimiz dizileri ve filmleri indireceğiz'}></LightContentText>
   
   <View className='items-center mt-10'>
    <DownloadsPoster/>
    <TouchableOpacity className='bg-blue-400 w-full items-center py-2 mt-7 mb-12'>
        <Text className='text-white'>Ayarla</Text>
    </TouchableOpacity>

    <SpecialButton type={'dark'} title={'İndirebilceğiniz Diğer İçerikler'} />
   </View>
    </View>
  )
}

export default DownloadsScreenBottom

const styles = StyleSheet.create({})