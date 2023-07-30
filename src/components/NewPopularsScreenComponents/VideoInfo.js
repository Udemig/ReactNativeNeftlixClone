import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TagItem from './TagItem';
import {tags} from '../../utils/constants';

const VideoInfo = () => {
  return (
    <View>
      <Text className="text-white font-bold my-2" style={{fontSize:18}}>3.sezonun yayın tarihi : 24 ağustos</Text>
      <Text className="text-white my-2 text-gray-400">
        The Witcher, senaryosu Lauren Schmidt Hissrich tarafından yazılan ve
        Netflix'te yayımlanan fantezi drama türündeki Amerikan yapımı internet
        dizisi. Andrzej Sapkowski'nin aynı adlı kitap serisine dayanan dizinin
        ilk sezonu 20 Aralık 2019 tarihinde yayımlanmıştır. İkinci sezonu ise 17
        Aralık 2021'de yayımlanmıştır.
      </Text>
      <View className="flex-row items-center ">
        {tags.map((tag, index) => (
          <TagItem label={tag} index={index} key={index} />
        ))}
      </View>
    </View>
  );
};

export default VideoInfo;

const styles = StyleSheet.create({});
