import {Text, View, ScrollView} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeScreenComponents/HomeHeader';
import HomeFiliterBar from '../../components/HomeScreenComponents/HomeFiliterBar';
import DailyTrend from '../../components/HomeScreenComponents/DailyTrend';
import HomeCard from '../../components/HomeScreenComponents/HomeCard';

const HomeScreen = () => {
  return (
    <View className="bg-gray-900 flex-1">
      <HomeHeader />

      <View className=" flex-1">
        <ScrollView>
          <HomeFiliterBar />
          <DailyTrend />
          <HomeCard categoryTitle={`Netflix ' te Populer`} />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
