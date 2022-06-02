import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import AppMain from './screens/AppMain';
import MessagesScreen from './screens/MessagesScreen';
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';
import SinginScreen from './screens/SinginScreen';
import AddPostScreen from './screens/AddPostScreen';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.1.33:3000/graphql',
  cache: new InMemoryCache(),
});

try {
  client
    .query({
      query: gql`
        query {
          users {
            username
          }
        }
      `,
    })
    .then(result => console.log(result.data.users));
} catch (error) {
  console.log('error');
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={AppMain}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Messages"
            component={MessagesScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signin"
            component={SinginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddPost"
            component={AddPostScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});

export default App;
