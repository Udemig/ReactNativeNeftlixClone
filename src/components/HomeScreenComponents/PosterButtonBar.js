import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SpecialButton from '../CoreComponents/SpecialButton';
import Top10 from '../CoreComponents/Top10';
const PosterButtonBar = () => {
  return (
    <View>
      <View className='flex-row items-center justify-center mb-8'>
    
        <Top10 />
        <Text className=" text-white    text-xl font-bold ml-1">
          Dizilerde Bugüm 1 Numara
        </Text>
      </View>
      <View className="flex-row justify-between">
        <SpecialButton title={'Oynat'} type={'light'} />
        <SpecialButton title={'Listem'} butonIcon={'done'} type={'dark'} />
      </View>
    </View>
  );
};

export default PosterButtonBar;

const styles = StyleSheet.create({});
