import React from 'react';

import {useQuery, gql} from '@apollo/client';

import {ScrollView, StyleSheet, View, Text, RefreshControl} from 'react-native';

import Post from '../components/Post';
import TopBar from '../components/TopBar';

const GET_POSTS = gql`
  query {
    location(idlocation: 1) {
      namelocation
      posts {
        posttext
        postdate
        idpost
        likes {
          username
        }
      }
    }
  }
`;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const HomeScreen = props => {
  const [refreshing, setRefreshing] = React.useState(false);

  const {loading, error, data} = useQuery(GET_POSTS, {variables: {refreshing}});

  const username = props.route.params.username;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  if (loading)
    return (
      <View style={homeStyles.container}>
        <TopBar />
        <ScrollView
          style={homeStyles.scrollStyle}
          contentInsetAdjustmentBehavior="automatic">
          <Text style={homeStyles.text}>Loading...</Text>
          <View style={homeStyles.inferiorBlock}></View>
        </ScrollView>
      </View>
    );

  const locationName = data.location.namelocation;

  return (
    <View style={homeStyles.container}>
      <TopBar username={username} />
      <ScrollView
        style={homeStyles.scrollStyle}
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {data.location.posts.map(post => {
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
        <View style={homeStyles.inferiorBlock}></View>
      </ScrollView>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  inferiorBlock: {
    backgroundColor: 'black',
    height: 115,
  },
  scrollStyle: {
    backgroundColor: 'black',
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
