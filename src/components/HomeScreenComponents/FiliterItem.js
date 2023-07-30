import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import PIcon from '../CoreComponents/PIcon';

const FiliterItem = ({filiterLabel, filiterIcon}) => {
  return (
    <TouchableOpacity className="flex-row mr-2 border border-white rounded-full px-3 py-2 items-center justify-center mr-3">
      <Text className="text-white ">{filiterLabel}</Text>

      {filiterIcon && (
        <PIcon style="ml-2" color={'white'} name={filiterIcon} size={25} />
      )}
    </TouchableOpacity>
  );
};

export default FiliterItem;

const styles = StyleSheet.create({});
