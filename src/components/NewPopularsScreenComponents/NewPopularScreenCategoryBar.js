import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, { useContext } from 'react';
import CategoryItem from './CategoryItem';
import {PopularsCategory} from '../../utils/constants';
import { DataContext } from '../../context/context';

const NewPopularScreenCategoryBar = () => {
    


const {setIndex}=useContext(DataContext)
  return (
    <View className="w-full ">
      <FlatList
        data={PopularsCategory}
        horizontal
        renderItem={({item,index}) => (
          <CategoryItem
            source={require(`../../assets/catImages/popcorn.png`)}
            catName={item.categoryName}
onPress={()=>setIndex({name:item.categoryName,url:item.categoryUrl})}
          />
        )}
      />
    </View>
  );
};

export default NewPopularScreenCategoryBar;

const styles = StyleSheet.create({});
