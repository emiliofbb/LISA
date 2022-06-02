import React from 'react';

import {useLazyQuery, gql} from '@apollo/client';

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import TextError from '../components/TextError';

const LOGIN_OK = gql`
  query LOGIN_OK($input: UserInput!) {
    login(input: $input)
  }
`;

const LoginScreen = ({navigation}) => {
  const [textUsername, setTextUsername] = React.useState(null);
  const [textPassword, setTextPassword] = React.useState(null);
  const [haveError, setError] = React.useState(false);

  const [tryLogin, {loading, called, data}] = useLazyQuery(LOGIN_OK, {
    variables: {input: {username: textUsername, keyword: textPassword}},
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Logo</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Introduce your username"
          placeholderTextColor={'#d3d3d3'}
          value={textUsername}
          onChangeText={newText => setTextUsername(newText)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Introduce your password"
          placeholderTextColor={'#d3d3d3'}
          value={textPassword}
          onChangeText={newText => setTextPassword(newText)}
          secureTextEntry={true}
        />
        <TextError errorText="Something went wrong." isError={haveError}/>
        <TouchableOpacity style={styles.button} onPress={async () => {
            setError(false);
            try {
                await tryLogin();
            } catch (error) {
                setError(true);
            }
            if (data.login) {
                navigation.navigate('Main', {username: textUsername});
            } else {
                setError(true);
            }
        }}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signin', {})}>
          <Text style={styles.textButton}>Create account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    color: 'white',
    backgroundColor: '#2b2d2f',
    borderColor: 'white',
    borderRadius: 30,
    padding: 10,
    paddingLeft: 25,
    marginBottom: 25,
    borderWidth: 1,
    marginHorizontal: 50,
    fontSize: 17,
  },
  textButton: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,
  },
  button: {
    backgroundColor: 'white',
    marginHorizontal: 100,
    borderRadius: 50,
    padding: 5,
    marginBottom: 25,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 30,
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
