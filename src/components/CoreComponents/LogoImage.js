import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../utils/constants';
import HeaderText from '../CoreComponents/HeaderText';
import LightContentText from '../CoreComponents/LightContentText';
const LogoImage = ({style}) => {
  return (
    <View
    style={[{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 10,
        position: 'relative',
      },style]}>
    <Image
      source={{uri: images.oscar}}
      style={{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
      }}
    />
    <Image
      source={require('../../assets/images/netflixlogo.png')}
      style={{
        width: 20,
        height: 20,
        position: 'absolute',
        top: 10,
        left: 5,
      }}
    />
  </View>
  )
}

export default LogoImage

const styles = StyleSheet.create({})