import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PosterImage from './PosterImage';
import { images } from '../../../utils/constants';

const DownloadsPoster = () => {
  return (
    <View
      className=" bg-gray-600 rounded-full items-center justify-center"
      style={{height: 260, width: 260}}>
      <View className="flex-row" style={{gap: 20, marginTop: 40}}>
        <PosterImage source={images.posterOne} style={{transform: [{rotate: '-25deg'}]}} />
        <PosterImage source={images.posterTwo} style={{transform: [{rotate: '25deg'}]}} />
      </View>
      <View>
        <PosterImage source={images.posterThree} style={{marginTop: -195, height: 200,width:150}} />
      </View>
    </View>
  );
};

export default DownloadsPoster;

const styles = StyleSheet.create({});
