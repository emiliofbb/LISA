import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons'

import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

const MessageWriter = () => {
    return(
        <View style={styles.messageReactor}>
            <TextInput
                style={styles.messageInput} 
                placeholder='Write a message...'
                placeholderTextColor={'#d3d3d3'}/>
            <TouchableOpacity style={styles.iconSendContainer}>
                <Ionicons style={styles.iconSend} name='navigate' color='black' size={35}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    messageInput: {
        paddingLeft: 25,
        fontSize: 15,
        color: 'white',
        flex: 5,
    },
    messageReactor: {
        alignContent: 'flex-end',
        borderRadius: 100,
        borderColor: 'white',
        backgroundColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 5
    },
    iconSendContainer: {
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 500,
        paddingHorizontal: 5,
        paddingVertical: 2,
        backgroundColor: 'white'
    },
    iconSend: {
        marginTop: 5,
        marginRight: 1
    },
    messagesContainer: {
        flex: 5
    }
});

export default MessageWriter;