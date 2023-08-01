import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../utils/constants';

const TrendGame = () => {
  return (
    <View className=' '>
      <View className="w-full" style={{height: 450}}>
        <Image
          source={{uri: images.oscar}}
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        />

        <View className='items-center' style={{marginTop:-150}}>
          <View style={{width: 100, height: 100,backgroundColor:'red',borderRadius:10,position:'relative'}}>
            <Image
              source={{uri: images.oscar}}
              style={{width: '100%', height: '100%', resizeMode: 'cover',borderRadius:10}}
            />
            <Image source={require('../../assets/images/netflixlogo.png')} style={{width:20,height:20,position:'absolute',top:10,left:5}}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrendGame;

const styles = StyleSheet.create({});
