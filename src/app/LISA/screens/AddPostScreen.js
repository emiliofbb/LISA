import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const AddPostScreen = ({navigation}) => {
  const [textExplanation, setTextExplanation] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>New Post</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Main', {})}>
          <Ionicons name="add" color="black" size={40} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Introduce the explanation"
        placeholderTextColor={'#d3d3d3'}
        value={textExplanation}
        onChangeText={newText => setTextExplanation(newText)}
        secureTextEntry={true}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  topContainer: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  textInput: {
    color: 'white',
    backgroundColor: '#2b2d2f',
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 17,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    flex: 1,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 5,
    alignItems: 'center',
    marginHorizontal: 15
  },
  text: {
    color: 'white',
    marginVertical: 30,
    fontSize: 50,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 15
  },
});

export default AddPostScreen;
