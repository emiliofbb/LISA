import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

const Post = (props) => {
    return(
    <View style={postStyles.postContainer}>
        <View style={postStyles.postInfoContainer}>
            <Text style={postStyles.postInfoText}>{props.place}</Text>
            <Text style={postStyles.postDateText}>{props.date}</Text>
        </View>
        <View>
            <Text style={postStyles.postTextMessage}>
            {props.body}
            </Text>
        </View>
        <View style={postStyles.postContainerButtons}>
          <Text style={postStyles.postTextLikes}>{props.likes}</Text>
          <TouchableOpacity style={postStyles.postButtonContainer} onPress={() => likePost()}>
              <Ionicons name='heart' color='red' size={25}/>
          </TouchableOpacity>
          <TouchableOpacity style={postStyles.postButtonContainer} onPress={() => sendMessage()}>
            <Ionicons name='chatbubble' color='white' size={25}/>
          </TouchableOpacity>
        </View>
    </View>
    );
}

function likePost() {
  console.debug("liked");
}

function sendMessage() {
  console.debug("message send");
}

const postStyles = StyleSheet.create ({
    postContainer: {
      backgroundColor: '#5e5e5e',
      marginHorizontal: 5,
      marginVertical: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 15,
      borderBottomWidth: 2,
      borderColor: 'white',
    },
    postInfoContainer: {
      flexDirection: 'row',
    },
    postInfoText: {
      color: 'white',
      paddingRight: 15,
      fontWeight: '700',
      fontSize: 20,
      flex: 4,
    },
    postDateText: {
      color: 'white',
      paddingRight: 15,
      fontWeight: '400',
      fontSize: 18,
      flex: 2,
      textAlign: 'right'
    },
    postTextMessage: {
      color: 'white',
      fontSize: 18,
    },
    postButtonContainer: {
      width: 30,
      height: 30,
      alignItems: 'center',
      margin: 6,
    },
    postContainerButtons: {
      flexDirection: 'row'
    },
    postTextLikes: {
      textAlignVertical: 'center',
      fontSize: 18,
      color: 'white',
      fontWeight: '500',
      marginRight: 5,
    },
  });

export default Post;