import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ChangerItem from './ChangerItem';

const BottomChanger = () => {
  const [changer, setChanger] = useState('Bölümler');
  return (
    <View
      className="flex-row items-center  border-t border-gray-400 "
      style={{gap: 20}}>
      <ChangerItem
        onPress={() => setChanger('Bölümler')}
        title={'Bölümler'}
        changer={changer}
      />

      <ChangerItem
        onPress={() => setChanger('Fragmanlar')}
        title={'Fragmanlar'}
        changer={changer}
      />

      <ChangerItem
        onPress={() => setChanger('Benzerleri')}
        title={'Benzerleri'}
        changer={changer}
      />
    </View>
  );
};

export default BottomChanger;

const styles = StyleSheet.create({});
