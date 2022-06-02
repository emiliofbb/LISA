import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const ProfileData = (props) => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textName}>{props.username}</Text>
            </View>
            <View style={styles.containerStatistics}>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Posts</Text>
                    <Text style={styles.textInfo}>4</Text>
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Likes</Text>
                    <Text style={styles.textInfo}>98</Text>
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>Responses</Text>
                    <Text style={styles.textInfo}>2</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderBottomColor: 'white',
        borderWidth: 1
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    textInfo: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textName: {
        color: 'white',
        textAlign: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    containerStatistics: {
        flexDirection: 'row',
        marginBottom: 15
    },
    containerInfo: {
        flex: 2
    },
});

export default ProfileData;