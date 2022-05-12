import React from 'react';

import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
  } from 'react-native';

const LoginScreen = ({navigation}) => {

    const [textUsername, setTextUsername] = React.useState(null);
    const [textPassword, setTextPassword] = React.useState(null);

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Login</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Introduce your surname'
                    placeholderTextColor={'#d3d3d3'}
                    value={textUsername}
                    onChangeText={(newText) => setTextUsername(newText)}
                    />
                <TextInput
                    style={styles.textInput}
                    placeholder='Introduce your password'
                    placeholderTextColor={'#d3d3d3'}
                    value={textPassword}
                    onChangeText={(newText) => setTextPassword(newText)}
                    secureTextEntry={true}
                    />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main', {})}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        color: 'white',
        backgroundColor: '#2b2d2f',
        borderColor: 'white',
        borderRadius: 30,
        padding: 10,
        marginBottom: 25,
        borderWidth: 1,
        marginHorizontal: 50,
        fontSize: 17
    },
    textButton: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
    },
    button: {
        backgroundColor: 'white',
        marginHorizontal: 150,
        borderRadius: 30,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 30,
        fontSize: 50,
        fontWeight: 'bold'
    },
});

export default LoginScreen;