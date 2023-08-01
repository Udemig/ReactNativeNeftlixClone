import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/AppScreens/HomeScreen';
import GamesScreen from '../screens/AppScreens/GamesScreen';
import NewPopularsScreen from '../screens/AppScreens/NewPopularsScreen';
import DownloadsScreen from '../screens/AppScreens/DownloadsScreen';
import Icons from 'react-native-vector-icons/MaterialIcons';
import NewPopularStackScreen from '../screens/StackScreens/NewPopularStackScreen';
import SearchScreen from '../screens/AppScreens/SearchScreen';
import DetailScreen from '../screens/AppScreens/DetailScreen';
import HomeStackScreen from '../screens/StackScreens/HomeStackScreen';
import DownloadsStackScreen from '../screens/StackScreens/DownloadsStackScreen';

const BottomTabNavigation = () => {
  const TabStack = createBottomTabNavigator();
  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeStackScreen') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'GamingScreen') {
            iconName = focused ? 'sports-esports' : 'sports-esports';
          } else if (route.name === 'NewPopularStackScreen') {
            iconName = focused ? 'playlist-play' : 'playlist-play';
          } else if (route.name === 'DownloadsStackScreen') {
            iconName = focused ? 'downloading' : 'downloading';
          }

          // You can return any component that you like here!
          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarItemStyle: {
          backgroundColor: 'black',
          borderTopColor: 'red',
        },
        headerShown: false,
      })}>
     <TabStack.Screen name="GamingScreen" component={GamesScreen} />
<TabStack.Screen
        options={{headerShown: false}}
        name="NewPopularStackScreen"
        component={NewPopularStackScreen}
      />
      <TabStack.Screen
        name="DownloadsStackScreen"
        component={DownloadsStackScreen}
      />
  
      <TabStack.Screen
        options={{headerShown: false}}
        name="HomeStackScreen"
        component={HomeStackScreen}
      />
 
    </TabStack.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
