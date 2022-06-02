import React from 'react';

import {
    Text,
    StyleSheet,
    View
} from 'react-native';

const TextError = (props) => {

    if (props.isError) {
        return(
            <Text style={styles.text}>{props.errorText}</Text>
        );
    } else {
        return <View/>;
    }
};

const styles = StyleSheet.create({
    text: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 15
    }
});

export default TextError;