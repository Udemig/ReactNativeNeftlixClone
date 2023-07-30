import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NewPopularsScreenHeader from '../../components/NewPopularsScreenComponents/NewPopularsScreenHeader';
import TrailerCard from '../../components/NewPopularsScreenComponents/TrailerCard';

const NewPopularsScreen = () => {
  return (
    <View className="flex-1 bg-black">
      <NewPopularsScreenHeader />
      <TrailerCard/>
    </View>
  );
};

export default NewPopularsScreen;
