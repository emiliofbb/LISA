import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TopBarChat = props => {
  const navigation = useNavigation();

  return (
    <View style={topBarStyles.topBarContainer}>
      <TouchableOpacity
        style={topBarStyles.topBarButtons}
        onPress={() => navigation.navigate('Messages')}>
        <Ionicons name="caret-back" color="white" size={40} />
      </TouchableOpacity>
      <Text style={topBarStyles.topBarTitle}>{props.username}</Text>
    </View>
  );
};

function pressedButton1() {
  console.debug('dsgasdg');
}

const topBarStyles = StyleSheet.create({
  topBarContainer: {
    backgroundColor: '#000000',
    borderBottomWidth: 2,
    borderColor: '#5e5e5e',
    flexDirection: 'row',
    width: 'auto',
  },
  topBarTitle: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'lucida grande',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontWeight: '700',
    textAlignVertical: 'center',
  },
  topBarButtons: {
    width: 40,
    height: 40,
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default TopBarChat;
