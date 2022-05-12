import React from 'react';

import {
    View,
    StyleSheet,
    ScrollView,
} from 'react-native'

import Post from '../components/Post';
import ProfileData from '../components/ProfileData';
import TopBar from '../components/TopBar';

const posts = [{place:'A Coruña', date:'17/08/2033', body:'Xd tamos locos primos', likes: 123}, 
{place: 'Santiago de Compostela', date:'01/01/2012', body:'Ajkd cddddfa dfj docker lucj', likes: 4444},
{place:'Vigo', date:'22/05/2022', body:'Sskfakjñ jdhfjkj hadjkfj f jdkf nadsnf jf ajdfn ndf djf najdnfuadnan jnjkdvn cjnvjncj vnijsnfijvn sdjvn jsdnvj nsf', likes: 9913}, 
{place: 'Pontevedra', date:'30/11/2025', body:'Pnjsdkjd jsdjfjjgh jfgjkd fjkghdfj ghdf ngjksjdhf gkdjfkjgdkjfg hdjkhfgjk dsfgjk fjgnjdsfgj dfkjg ndjskfng kjdnfkjdjfnvkjd jfv dkj', likes: 1},]


const ProfileScreen = () => {
    return(
        <View>
            <TopBar/>
            <ScrollView
            style={profileStyles.scrollStyle}
                contentInsetAdjustmentBehavior="automatic">
                <ProfileData/>
                {posts.map((post) => (
                    <Post key={post.date} place={post.place} date={post.date} body={post.body} likes={post.likes}/>
                ))}
                <View style={profileStyles.inferiorBlock}/>
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
});

export default ProfileScreen;