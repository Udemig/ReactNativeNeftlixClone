import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';
import VideoHeader from './VideoHeader';
import { images } from '../../utils/constants';
import VideoInfo from './VideoInfo';

const TrailerCard = () => {
  return (
    <View className="flex-row">
      <View className=" p-3" style={{maxwidth:'20%',minWidth:'20%'}}>
        <Text className="text-white" style={{fontWeight:500}}>AĞU</Text>
        <Text className="text-white" style={{fontWeight:900,fontSize:40}}>24</Text>
      </View>

      <View style={{width:'80%'}} className='p-3 ' >
        <View className=" rounded-lg " style={{height:300,}} >
       <Image source={{uri:images.dailyTrend}} style={{height:300,resizeMode:'cover'}} className='rounded-lg'/>
        </View>
        <View>
          <VideoHeader videoName={'The Witcher'} />
          <VideoInfo/>
        </View>
      </View>
    </View>
  );
};

export default TrailerCard;

const styles = StyleSheet.create({});
