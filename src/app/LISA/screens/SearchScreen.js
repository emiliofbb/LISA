import React from 'react';

import { 
    gql,
    useQuery
} from '@apollo/client';

import {
    View,
    TextInput,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native'

import Post from '../components/Post';

const GET_POSTS = gql`
  query GET_POSTS($regex: String!) {
  searchedPost(input: {regex: $regex idlocation: 1}) {
    namelocation
    posts {
      posttext
      idpost
      postdate
    }
  }
}
`;

const posts = [{place:'A Coruña', date:'17/08/2033', body:'Xd tamos locos primos', likes: 123}, 
{place: 'Santiago de Compostela', date:'01/01/2012', body:'Ajkd cddddfa dfj docker lucj', likes: 4444},
{place:'Vigo', date:'22/05/2022', body:'Sskfakjñ jdhfjkj hadjkfj f jdkf nadsnf jf ajdfn ndf djf najdnfuadnan jnjkdvn cjnvjncj vnijsnfijvn sdjvn jsdnvj nsf', likes: 9913}, 
{place: 'Pontevedra', date:'30/11/2025', body:'Pnjsdkjd jsdjfjjgh jfgjkd fjkghdfj ghdf ngjksjdhf gkdjfkjgdkjfg hdjkhfgjk dsfgjk fjgnjdsfgj dfkjg ndjskfng kjdnfkjdjfnvkjd jfv dkj', likes: 1},]

const SearchScreen = () => {

    const [regex, setText] = React.useState(null);
    const { loading, error, data } = useQuery(GET_POSTS, {variables: {regex}});

    if (loading || error) return (
        <View style={searchScreenStyle.container}>
            <TextInput
                style={searchScreenStyle.searchTextInput}
                placeholder='Search...'
                placeholderTextColor='#d3d3d3'
                value={regex}
                onChangeText={newText => setText(newText)}/>
            <ScrollView
            style={searchScreenStyle.scrollStyle}
                contentInsetAdjustmentBehavior="automatic">
                <Text style={searchScreenStyle.text}>Loading...</Text>
                <View style={searchScreenStyle.inferiorBlock}/>
            </ScrollView>
        </View>
    );

    const locationName = data.namelocation;
    return(
        <View style={searchScreenStyle.container}>
            <TextInput
                style={searchScreenStyle.searchTextInput}
                placeholder='Search...'
                placeholderTextColor='#d3d3d3'
                value={regex}
                onChangeText={newText => setText(newText)}/>
            <ScrollView
            style={searchScreenStyle.scrollStyle}
                contentInsetAdjustmentBehavior="automatic">
                {data.searchedPost.posts.map((post) => { 
                    const date = new Date;
                    date.setDate(post.postdate);
                    return (
                    <Post key={post.idpost} place={locationName} date={date.toDateString('en-US')} body={post.posttext} likes={0}/>
                )})}
                <View style={searchScreenStyle.inferiorBlock}/>
            </ScrollView>
        </View>
    );
}

const searchScreenStyle = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
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
        backgroundColor: 'black'
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default SearchScreen;