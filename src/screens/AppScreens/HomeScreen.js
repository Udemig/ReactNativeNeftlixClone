import {Text, View, ScrollView} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeScreenComponents/HomeHeader';
import HomeFiliterBar from '../../components/HomeScreenComponents/HomeFiliterBar';
import DailyTrend from '../../components/HomeScreenComponents/DailyTrend';
import HomeCard from '../../components/HomeScreenComponents/HomeCard';

const HomeScreen = () => {
  return (
    <View className="bg-gray-500 flex-1">
      <HomeHeader />

      <View className="bg-red-50 flex-1">

         
            <HomeFiliterBar />
            <DailyTrend />
            <HomeCard categoryTitle={`Netflix ' te Populer`} />
         
    
      </View>
    </View>
  );
};

export default HomeScreen;
