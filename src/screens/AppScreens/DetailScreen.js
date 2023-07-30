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

const DetailScreen = () => {
  return (
    <View className="flex-1 bg-black">
      <DetailScreenHeader />

      <ScrollView className=" flex-1">
        <Image
          source={{uri: images.dailyTrend}}
          className=" w-screen h-60"
          style={{resizeMode: 'stretch'}}
        />
        <View className="ml-3 mt-2 mb-6" style={{gap: 10}}>
          <DetailHeader />
          <DetailInfo />
          <IconsBar />
        </View>
        <DetailBottom/>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
