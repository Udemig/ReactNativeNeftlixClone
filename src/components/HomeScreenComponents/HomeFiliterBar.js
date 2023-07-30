import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FiliterItem from './FiliterItem';

const HomeFiliterBar = () => {
  return (
    <View className='flex-row p-3'>
      <FiliterItem filiterLabel={'Diziler'} />
      <FiliterItem filiterLabel={'Filmler'} />
      <FiliterItem filiterLabel={'Kategoriler'} filiterIcon={'expand-more'} />
    </View>
  );
};

export default HomeFiliterBar;

const styles = StyleSheet.create({});
