import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {images} from '../../utils/constants';
import SpecialButton from '../CoreComponents/SpecialButton';
import PosterButtonBar from './PosterButtonBar';

const DailyTrend = () => {
  return (
    <View
      className="relative px-3 rounded-lg h-4/6 "
      style={{
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.0,
        elevation: 24,
      }}>
      <Image
        style={{
          resizeMode: 'stretch',
        }}
        className="w-full h-full rounded-lg border border-white border-1"
        source={{uri: images.dailyTrend}}
      />
<View className='absolute bottom-5 left-16'>
<PosterButtonBar/>
</View>
   
     
    
    
    </View>
  );
};

export default DailyTrend;

const styles = StyleSheet.create({});
