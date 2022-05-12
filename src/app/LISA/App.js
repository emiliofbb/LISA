import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import AppMain from './screens/AppMain';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{headerShown: false}}/>
        <Stack.Screen
          name='Main'
          component={AppMain}
          options={{headerShown: false}}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
});

export default App;