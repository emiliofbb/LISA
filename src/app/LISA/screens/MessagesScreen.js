import React from "react";

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native'

import Chat from "../components/Chat";

const MessagesScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.topBarContainer}>
                <Text style={styles.topBarTitle}>
                    MESSAGES
                </Text>
            </View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                    <Chat date='15/05/2015' msgShort='Holis creo que son eu o do post jeje esta e unha proba jisjis'/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d3d3d',
    },
    topBarContainer: {
        backgroundColor: '#000000',
        borderBottomWidth: 2,
        borderColor: '#5e5e5e',
        flexDirection: 'row',
        width: 'auto',
    },
    topBarTitle: {
        color: '#ffffff',
        fontSize: 35,
        fontFamily: 'lucida grande',
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontWeight: '700',
        flex: 5
    },
});

export default MessagesScreen;