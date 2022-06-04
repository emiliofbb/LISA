import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const AppMain = ({route, navigation}) => {
  
  console.debug(route);

  const username = route.params.username;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Profile') {
            iconName = 'person-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          paddingVertical: 5,
          borderTopColor: 'gray',
          borderTopWidth: 1,
          backgroundColor: 'black',
          position: 'absolute',
          height: 50,
        },
        tabBarLabelStyle: {paddingBottom: 3},
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        options={{headerShown: false}}
        initialParams={{username}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        initialParams={{username}}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        initialParams={{username}}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});

export default AppMain;
