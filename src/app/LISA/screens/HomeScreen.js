import React from 'react';

import { 
    useQuery,
    gql
  } from '@apollo/client';

import {
    ScrollView,
    StyleSheet,
    View,
    Text
} from 'react-native';

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
      }
    }
  }
`;

const HomeScreen = (props) => {

    const { loading, error, data } = useQuery(GET_POSTS);
    const username = props.route.params.username;

    if (loading) return (
        <View style={homeStyles.container}>
            <TopBar/>
            <ScrollView
            style={homeStyles.scrollStyle}
                contentInsetAdjustmentBehavior="automatic">
                <Text style={homeStyles.text}>Loading...</Text>
                <View style={homeStyles.inferiorBlock}></View>
            </ScrollView>
        </View>
    );
    const locationName = data.location.namelocation;

    return(
        <View style={homeStyles.container}>
            <TopBar username={username} />
            <ScrollView
            style={homeStyles.scrollStyle}
                contentInsetAdjustmentBehavior="automatic">
                {data.location.posts.map((post) => { 
                    const date = new Date;
                    date.setDate(post.postdate);
                    return (
                    <Post key={post.idpost} place={locationName} date={date.toDateString('en-US')} body={post.posttext} likes={0}/>
                )})}
                <View style={homeStyles.inferiorBlock}></View>
            </ScrollView>
        </View>
    );
}

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
        flex: 1
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default HomeScreen;