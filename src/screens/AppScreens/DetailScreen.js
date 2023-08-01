import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import DetailScreenHeader from '../../components/DetailScreenComponents/DetailScreenHeader';
import TrailerCard from '../../components/NewPopularsScreenComponents/TrailerCard';
import HomeCard from '../../components/HomeScreenComponents/HomeCard';
import HomeFiliterBar from '../../components/HomeScreenComponents/HomeFiliterBar';
import DailyTrend from '../../components/HomeScreenComponents/DailyTrend';
import {images} from '../../utils/constants';
import DetailHeader from '../../components/DetailScreenComponents/DetailHeader';
import DetailInfo from '../../components/DetailScreenComponents/DetailInfo';
import IconsBar from '../../components/DetailScreenComponents/IconsBar';
import DetailBottom from '../../components/DetailScreenComponents/DetailBottomComponents/DetailBottom';
import { useRoute } from '@react-navigation/native';

const DetailScreen = () => {
  const route=useRoute()
  console.log(route.params.movie)
const{title,id,poster_path,overview}=route.params.movie
  return (
    <View className="flex-1 bg-black">
      <DetailScreenHeader />

      <ScrollView className=" flex-1">
   <View  className=" w-screen h-60">
   <Image
          source={{uri: `https://image.tmdb.org/t/p/original${poster_path}`}}
         
          style={{width:'100%',height:'100%',resizeMode: 'cover'}}
        /> 
   </View>
        <View className="ml-3 mt-2 mb-6" style={{gap: 10}}>
          <DetailHeader header={title}/>
          <DetailInfo overview={overview}/>
          <IconsBar />
        </View>
        <DetailBottom/>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
