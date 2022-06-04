import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const TopBar = ({username}) => {

  const navigation = useNavigation();

  return(
        <View style={topBarStyles.topBarContainer}>
          <Text style={topBarStyles.topBarTitle}>
              SALI
          </Text>
          <TouchableOpacity style={topBarStyles.topBarButtons} onPress={() => navigation.navigate('AddPost', {username})}>
            <Ionicons name='add' color='white' size={35}/>
          </TouchableOpacity>
          <TouchableOpacity style={topBarStyles.topBarButtons} onPress={() => navigation.navigate('Messages', {username})}>
            <Ionicons name='paper-plane' color='white' size={35}/>
          </TouchableOpacity>
      </View>
  );
}

function pressedButton1() {
    console.debug("dsgasdg")
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
      fontSize: 35,
      fontFamily: 'lucida grande',
      paddingHorizontal: 15,
      paddingVertical: 5,
      fontWeight: '700',
      flex: 5
    },
    topBarButtons: {
      flex: 1,
      width: 40,
      height: 40,
      marginVertical: 10,
    },
});

export default TopBar;