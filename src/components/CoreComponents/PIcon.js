import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const PIcon = ({name, size, color, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} className={style}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default PIcon;

const styles = StyleSheet.create({});
