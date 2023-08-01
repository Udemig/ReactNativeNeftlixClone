import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import NewPopularsScreenHeader from '../../components/NewPopularsScreenComponents/NewPopularsScreenHeader';
import TrailerCard from '../../components/NewPopularsScreenComponents/TrailerCard';
import {DataContext} from '../../context/context';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewPopularsScreen = () => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const {catIndex} = useContext(DataContext);
  const navigation = useNavigation();
  //console.log(catIndex.url)

  // Önbellek anahtarı sorugulama bu anahtar üzerinden yapıalcak
  const CACHE_KEY = 'movies_cache';

  const cacheMovies = async moviesData => {
    try {
      const jsonData = JSON.stringify(moviesData);
      await AsyncStorage.setItem(catIndex.url, jsonData);
    } catch (error) {
      console.log('cacheMovies', error);
    }
  };

  const getCachedMovies = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(catIndex.url);
      // console.log(jsonData)
      return jsonData ? JSON.parse(jsonData) : null;
    } catch (error) {
      console.log('getCachedMovies', error);
    }
  };
  const removeCache = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {}
  };
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

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${catIndex.url}`,
        options,
      );
      if (!response.ok) {
        throw new Error('Bağlantı hatası');
      }
      // console.log(response)
      const data = await response.json();
      //console.log(data)
      setMovies(data.results);

      cacheMovies(data.results);
    } catch (error) {
      console.log('', error);
    } finally {
      setIsLoading(false);
    }
  };

  //prev == previous yani bir önceki demek
  const [prevCatIndexUrl, setPrevCatIndexUrl] = useState(null);

  useEffect(() => {
    if (prevCatIndexUrl !== catIndex.url) {
      //removeCache(CACHE_KEY)
      setPrevCatIndexUrl(catIndex.url);
    }

    getCachedMovies().then(cachedMovies => {
      //console.log('useEffect cachedMovies',cachedMovies)

      if (cachedMovies) {
        //Önbellekte veri varsa direk stateyi setle
        console.log('önbellekten alıyorum');
        setMovies(cachedMovies);
        setIsLoading(false);
      } else {
        //önbellekte veri yoksa api ye istek at
        console.log('api istek atıyoprum');
        getMovies();
      }
    });
  }, [catIndex.url, prevCatIndexUrl]);
  // console.log(movies);
  if (isLoading) {
    return (
      <View>
        <Text>load,ing</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 bg-black">
      <NewPopularsScreenHeader />
      {/* <Button title="cacheyi temizle" onPress={() => removeCache(C)} />
      <Button title="getir" onPress={() => getCachedMovies()} /> */}
      <FlatList
        data={movies}
        renderItem={({item}) => {
          return (
            <TrailerCard
              movieInfo={item}
              onPress={() => navigation.navigate('DetailScreen', {movie: item})}
            />
          );
        }}
      />
    </View>
  );
};

export default NewPopularsScreen;
