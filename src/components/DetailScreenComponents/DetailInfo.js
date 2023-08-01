import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import SpecialButton from '../CoreComponents/SpecialButton';
const DetailInfo = ({overview}) => {
  return (
    <View style={{gap: 10}} >
      <View className="flex-row items-center " style={{gap: 10}}>
        <View className="p-1 rounded " style={{backgroundColor: 'red'}}>
          <Icons name="thumb-up" color="white" size={20} />
        </View>
        <Text className="text-white font-bold text-lg">Çok Beğenildi</Text>
      </View>
      <Text className="text-white font-semibold text-lg">
        3. Sezonun Yayın Tarihi{' '}
      </Text>
      <SpecialButton type={'light'} title={'Oynat'} butonIcon={'play'} />
      <SpecialButton
        type={'dark'}
        title={'İndir: S1:B1'}
        butonIcon={'arrow-down'}
      />

      <Text className="text-white">
       {overview}
      </Text>

      <View className="flex-row">
        <Text className="text-gray-500 ">Başroldekiler:</Text>
        <Text className="text-gray-400  " style={{width: 300}}>
          David Stakston,Herman Tommeraas,Theresa Frostad...
        </Text>
      </View>
    </View>
  );
};

export default DetailInfo;

const styles = StyleSheet.create({});
