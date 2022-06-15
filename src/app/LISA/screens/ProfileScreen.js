import React from 'react';

import {useQuery, gql} from '@apollo/client';

import {View, StyleSheet, ScrollView, Text} from 'react-native';

import Post from '../components/Post';
import ProfileData from '../components/ProfileData';
import TopBar from '../components/TopBar';

const GET_POSTS = gql`
  query GET_POSTS($username: String!) {
    user(username: $username) {
      username
      posts {
        postdate
        posttext
        idpost
        location {
          namelocation
        }
        likes {
            username
        }
      }
    }
  }
`;

const ProfileScreen = props => {
  const username = props.route.params.username;
  const {loading, error, data} = useQuery(GET_POSTS, {variables: {username}});

  if (loading)
    return (
      <View style={profileStyles.container}>
        <TopBar />
        <ScrollView
          style={profileStyles.scrollStyle}
          contentInsetAdjustmentBehavior="automatic">
          <Text style={profileStyles.text}>Loading...</Text>
          <View style={profileStyles.inferiorBlock}></View>
        </ScrollView>
      </View>
    );

  return (
    <View style={profileStyles.container}>
      <TopBar username={username} />
      <ScrollView
        style={profileStyles.scrollStyle}
        contentInsetAdjustmentBehavior="automatic">
        <ProfileData
          username={data.user.username}
          numPosts={data.user.posts.length}
        />
        {data.user.posts.map(post => {
          const date = new Date(post.postdate);
          return (
            <Post
              key={post.idpost}
              postid={post.idpost}
              place={post.location.namelocation}
              date={date.toLocaleDateString('en-US')}
              body={post.posttext}
              likes={post.likes}
              username={username}
            />
          );
        })}
        <View style={profileStyles.inferiorBlock}></View>
      </ScrollView>
    </View>
  );
};

const profileStyles = StyleSheet.create({
  inferiorBlock: {
    backgroundColor: 'black',
    height: 115,
  },
  scrollStyle: {
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default ProfileScreen;
