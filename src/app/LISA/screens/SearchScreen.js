import React from 'react';

import {gql, useQuery} from '@apollo/client';

import {View, TextInput, StyleSheet, ScrollView, Text} from 'react-native';

import Post from '../components/Post';

const GET_POSTS = gql`
  query GET_POSTS($regex: String!) {
    searchedPost(input: {regex: $regex, idlocation: 1}) {
      namelocation
      posts {
        posttext
        idpost
        postdate
        likes {
          username
        }
      }
    }
  }
`;

const SearchScreen = props => {
  const [regex, setText] = React.useState(null);
  const {loading, error, data} = useQuery(GET_POSTS, {variables: {regex}});

  const username = props.route.params.username;

  if (loading || error)
    return (
      <View style={searchScreenStyle.container}>
        <TextInput
          style={searchScreenStyle.searchTextInput}
          placeholder="Search..."
          placeholderTextColor="#d3d3d3"
          value={regex}
          onChangeText={newText => setText(newText)}
        />
        <ScrollView
          style={searchScreenStyle.scrollStyle}
          contentInsetAdjustmentBehavior="automatic">
          <Text style={searchScreenStyle.text}>Loading...</Text>
          <View style={searchScreenStyle.inferiorBlock} />
        </ScrollView>
      </View>
    );

  const locationName = data.searchedPost.namelocation;
  return (
    <View style={searchScreenStyle.container}>
      <TextInput
        style={searchScreenStyle.searchTextInput}
        placeholder="Search..."
        placeholderTextColor="#d3d3d3"
        value={regex}
        onChangeText={newText => setText(newText)}
      />
      <ScrollView
        style={searchScreenStyle.scrollStyle}
        contentInsetAdjustmentBehavior="automatic">
        {data.searchedPost.posts.map(post => {
          const date = new Date(post.postdate);
          return (
            <Post
              key={post.idpost}
              postid={post.idpost}
              place={locationName}
              date={date.toLocaleDateString('en-US')}
              body={post.posttext}
              likes={post.likes}
              username={username}
            />
          );
        })}
        <View style={searchScreenStyle.inferiorBlock} />
      </ScrollView>
    </View>
  );
};

const searchScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  searchTextInput: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'gray',
    fontSize: 18,
    height: 50,
    paddingLeft: 15,
    color: 'white',
    fontWeight: '500',
  },
  inferiorBlock: {
    backgroundColor: 'black',
    height: 115,
  },
  scrollStyle: {
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
