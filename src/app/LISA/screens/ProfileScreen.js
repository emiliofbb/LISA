import React from 'react';

import {
    useQuery,
    gql
} from '@apollo/client';

import {
    View,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native'

import Post from '../components/Post';
import ProfileData from '../components/ProfileData';
import TopBar from '../components/TopBar';

const GET_POSTS = gql`
  query GET_POSTS($username: String!){
    user(username: $username) {
    username
    posts {
      postdate,
      posttext,
      idpost,
      location {
        namelocation
      }
    }
  }
  }
`;

const ProfileScreen = (props) => {

    const username = props.route.params.username;
    const { loading, error, data } = useQuery(GET_POSTS, {variables: {username}});

    console.log(username);

    if (loading) return (
        <View style={profileStyles.container}>
            <TopBar/>
            <ScrollView
            style={profileStyles.scrollStyle}
                contentInsetAdjustmentBehavior="automatic">
                <Text style={profileStyles.text}>Loading...</Text>
                <View style={profileStyles.inferiorBlock}></View>
            </ScrollView>
        </View>
    );

    return(
        <View style={profileStyles.container}>
            <TopBar/>
            <ScrollView
            style={profileStyles.scrollStyle}
                contentInsetAdjustmentBehavior="automatic">
                    <ProfileData username={data.user.username}/>
                {data.user.posts.map((post) => { 
                    const date = new Date;
                    date.setDate(post.postdate);
                    return (
                    <Post key={post.idpost} place={post.location.namelocation} date={date.toDateString('en-US')} body={post.posttext} likes={0}/>
                )})}
                <View style={profileStyles.inferiorBlock}></View>
            </ScrollView>
        </View>
    );
}

const profileStyles = StyleSheet.create({
    inferiorBlock: {
        backgroundColor: 'black',
        height: 115,
    },
    scrollStyle: {
        backgroundColor: 'black'
    },
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
});

export default ProfileScreen;