import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderText from '../CoreComponents/HeaderText';
import GameCard from './GameCard';

const GamesBar = ({style}) => {
  return (
    <View style={style}>
      <HeaderText title={'Yeni Eklenen Oyunlar'} />
 <ScrollView horizontal={true}>
 <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
 </ScrollView>
    </View>
  );
};

export default GamesBar;

const styles = StyleSheet.create({});
