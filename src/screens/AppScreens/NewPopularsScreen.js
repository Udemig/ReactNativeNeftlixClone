import {StyleSheet, Text, View,FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import NewPopularsScreenHeader from '../../components/NewPopularsScreenComponents/NewPopularsScreenHeader';
import TrailerCard from '../../components/NewPopularsScreenComponents/TrailerCard';
import { DataContext } from '../../context/context';
import { useNavigation } from '@react-navigation/native';


const NewPopularsScreen = () => {
  const [movies, setMovies] = useState();
const {catIndex}=useContext(DataContext)
const navigation=useNavigation()
//console.log(catIndex.url)
  const getMovies = async () => {
    //console.log('çalışıyom')
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTcyZTczMmQzYzMyMzNhMzljZGMyOTM1ZDJjZTg1NiIsInN1YiI6IjY0YmUzNDM3YWM2Yzc5MDhlMDg2Zjc5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9DvE6PNWCjKXr6sh8hKF1j_kx7_tcab1JUfg_dU6PRk',
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${catIndex.url}`, options)
      .then(response => response.json())
      .then(response => {
        //console.log(response.results)
        setMovies(response.results);
      });
  };
  useEffect(() => {
    getMovies();
  }, [catIndex.url]);
  //console.log(movies);
  return (
    <View className="flex-1 bg-black">
      <NewPopularsScreenHeader />
    <FlatList
    data={movies}
    renderItem={({item})=>{
      return(
        <TrailerCard movieInfo={item} onPress={()=>navigation.navigate('DetailScreen',{movie:item})}/>
      )
    }}
    />
    </View>
  );
};

export default NewPopularsScreen;
