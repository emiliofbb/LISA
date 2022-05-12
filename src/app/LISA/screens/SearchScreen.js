import React from 'react';

import {
    View,
    TextInput,
    StyleSheet,
    ScrollView,
} from 'react-native'

import Post from '../components/Post';

const posts = [{place:'A Coruña', date:'17/08/2033', body:'Xd tamos locos primos', likes: 123}, 
{place: 'Santiago de Compostela', date:'01/01/2012', body:'Ajkd cddddfa dfj docker lucj', likes: 4444},
{place:'Vigo', date:'22/05/2022', body:'Sskfakjñ jdhfjkj hadjkfj f jdkf nadsnf jf ajdfn ndf djf najdnfuadnan jnjkdvn cjnvjncj vnijsnfijvn sdjvn jsdnvj nsf', likes: 9913}, 
{place: 'Pontevedra', date:'30/11/2025', body:'Pnjsdkjd jsdjfjjgh jfgjkd fjkghdfj ghdf ngjksjdhf gkdjfkjgdkjfg hdjkhfgjk dsfgjk fjgnjdsfgj dfkjg ndjskfng kjdnfkjdjfnvkjd jfv dkj', likes: 1},]

const SearchScreen = () => {

    const [textSearch, setText] = React.useState(null);

    return(
        <View style={searchScreenStyle.container}>
            <TextInput
                style={searchScreenStyle.searchTextInput}
                placeholder='Search...'
                placeholderTextColor='#d3d3d3'
                value={textSearch}
                onChangeText={newText => setText(newText)}/>
            <ScrollView
            style={searchScreenStyle.scrollStyle}
                contentInsetAdjustmentBehavior="automatic">
                {posts.map((post) => (
                    <Post key={post.date} place={post.place} date={post.date} body={post.body} likes={post.likes}/>
                ))}
                <View style={searchScreenStyle.inferiorBlock}/>
            </ScrollView>
        </View>
    );
}

const searchScreenStyle = StyleSheet.create({
    container: {
        backgroundColor: 'black'
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
});

export default SearchScreen;