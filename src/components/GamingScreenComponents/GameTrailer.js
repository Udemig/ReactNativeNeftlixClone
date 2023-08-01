import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderText from '../CoreComponents/HeaderText';
import Video from 'react-native-video';
import LogoImage from '../CoreComponents/LogoImage';
import SHeaderText from '../CoreComponents/SHeaderText';
import LightContentText from '../CoreComponents/LightContentText';

const GameTrailer = () => {
  return (
    <View className="px-3">
      <HeaderText title={'Mobil Oyun Fragmanları'} />
      <View
        style={{
          width: '100%',
          height: 250,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:10,
          borderRadius:10
        
        }}>
        {/* <Video

          resizeMode={'cover'}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          }}
          style={styles.backgroundVideo}
          
        /> */}
      </View>

      <View className='flex-row mt-3' style={{gap:15}}>
        <LogoImage style={{width:75,height:75}}/>
        <View>
            <SHeaderText title={'Terra Nil'}/>
            <LightContentText content={'Similasyon Oyunu'}/>
        </View>
      </View>
    </View>
  );
};

export default GameTrailer;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius:10

  },
});
