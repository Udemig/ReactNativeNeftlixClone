import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import PIcon from '../CoreComponents/PIcon';

const SearchBar = () => {
  return (
    <View className="bg-gray-600 w-full flex-row justify-between p-2 mt-2">
        <View className='flex-row ' style={{gap:10}}>
        <PIcon name={'search-outline'} color={'#9ca3af'} size={25}/>
  <TextInput style={{color:'white'}} placeholderTextColor={'#9ca3af'} placeholder='İçerik,tür veya kişi adıyla arayın'/>

        </View>
         <PIcon name={'mic-outline'} color={'#9ca3af'} size={25}/>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
