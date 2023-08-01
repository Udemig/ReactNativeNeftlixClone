import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LogoImage from '../CoreComponents/LogoImage';
import SHeaderText from '../CoreComponents/SHeaderText';
import LightContentText from '../CoreComponents/LightContentText';

const GameCard = () => {
  return (
    <View className='mt-3 m-1'>
      <LogoImage />
      <SHeaderText title={'Oscar Çöllerde'}/>
      <LightContentText content={'Masa Oyunu'}/>
    </View>
  );
};

export default GameCard;

const styles = StyleSheet.create({});
