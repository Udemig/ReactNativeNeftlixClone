import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';
import VideoHeader from './VideoHeader';
import { images } from '../../utils/constants';
import VideoInfo from './VideoInfo';

const TrailerCard = ({movieInfo,onPress}) => {
  //console.log(movieInfo)
  return (
    <TouchableOpacity onPress={onPress} className="flex-row">
      <View className=" p-3" style={{maxwidth:'15%',minWidth:'10%'}}>
        <Text className="text-white" style={{fontWeight:500}}>AĞU</Text>
        <Text className="text-white" style={{fontWeight:900,fontSize:40}}>24</Text>
      </View>
   
      <View style={{width:'80%'}} className='p-3 ' >
        <View className=" rounded-lg " style={{height:300,}} >
        <Image source={{uri:`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}} style={{height:300,width:'100%',resizeMode:'cover'}} className='rounded-lg'/>
  
          </View>
        <View>
          <VideoHeader videoName={movieInfo.title} />
          <VideoInfo overview={movieInfo.overview} releaseDate={movieInfo.release_date} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TrailerCard;

const styles = StyleSheet.create({});
