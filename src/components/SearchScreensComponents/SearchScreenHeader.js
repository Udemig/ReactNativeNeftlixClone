import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PIcon from '../CoreComponents/PIcon';
import Avatar from '../CoreComponents/Avatar';
import SearchBar from './SearchBar';
import {useNavigation} from '@react-navigation/native';

const SearchScreenHeader = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View className="flex-row justify-between p-3">

          <PIcon
            onPress={() => navigation.navigate('NewPopularScreen')}
            name={'arrow-back'}
            color={'white'}
            size={24}
          />
  
        <View>
          <Avatar />
        </View>
      </View>

      <View>
        <SearchBar />
      </View>
    </View>
  );
};

export default SearchScreenHeader;

const styles = StyleSheet.create({});
