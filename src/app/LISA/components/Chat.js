import React from 'react';

import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Chat = (props) => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Chat', {variables: {username: props.username}})}>
            <Text style={styles.textMsg}>{props.msgShort}</Text>
            <Text style={styles.textDate}>{props.date}</Text>
        </TouchableOpacity>
    );
}

function entrasChat() {
    console.debug('Entraches no chat x')
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        paddingVertical: 15
    },
    textDate: {
        color: 'white',
        flex: 2,
        textAlign: 'right',
        paddingRight: 10,
        fontSize: 17,
    },
    textMsg: {
        color: 'white',
        flex: 4,
        paddingLeft: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
});

export default Chat;