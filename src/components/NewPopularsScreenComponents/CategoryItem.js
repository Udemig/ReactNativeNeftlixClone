import {StyleSheet, Text, View, Image, Touchable, TouchableOpacity} from 'react-native';
import React, { useContext } from 'react';
import { DataContext } from '../../context/context';

const CategoryItem = ({source, catName,active,onPress}) => {

const {catIndex}=useContext(DataContext)
console.log(source)
  return (
    <TouchableOpacity onPress={onPress} className={`flex-row items-center justif-center ${catIndex.name==catName && 'bg-gray-200'} m-2 px-2 py-1 rounded-full`}>
      <Image source={require('../../assets/catImages/fire.png')} className="w-5 h-5 m-1 mr-1" />
      <Text className={`font-bold text-xs ${catIndex.name==catName ? 'text-black': 'text-white'} `}>{catName}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
