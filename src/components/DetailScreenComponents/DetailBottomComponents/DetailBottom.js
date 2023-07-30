import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomChanger from './BottomChanger';
import SpecialButton from '../../CoreComponents/SpecialButton';
import BottomCard from './BottomCard';

const DetailBottom = () => {
  return (
    <View className="ml-3" style={{gap: 10}}>
      <BottomChanger />
      <View className=" w-32">
        <SpecialButton
          type={'dark'}
          title={'1.Sezon'}
          rightIcon={'caret-down'}
          color={'white'}
        />
      </View>
      <BottomCard/>
    </View>
  );
};

export default DetailBottom;

const styles = StyleSheet.create({});
