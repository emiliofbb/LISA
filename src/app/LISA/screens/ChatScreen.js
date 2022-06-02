import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons'

import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import MessageWriter from '../components/MessageWriter';
import TopBarChat from '../components/TopBarChat';
import Message from '../components/Message';

const ChatScreen = () => {
    return(
        <View style={styles.container}>
            <TopBarChat username='Non é username'/>
            <View style={styles.messagesContainer}>
                <Message isMe={false}/>
            </View>
            <MessageWriter style={styles.messageSender}/>
        </View>
    );
}

const styles = StyleSheet.create({
    messagesContainer: {
        backgroundColor: 'black',
        flex: 1,
        padding: 10
    },
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
});

export default ChatScreen;