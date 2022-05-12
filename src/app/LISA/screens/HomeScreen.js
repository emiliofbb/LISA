import React from 'react';

import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import Post from '../components/Post';
import TopBar from '../components/TopBar';

const posts = [{place:'A Coruña', date:'17/08/2033', body:'Xd tamos locos primos', likes: 123}, 
{place: 'Santiago de Compostela', date:'01/01/2012', body:'Ajkd cddddfa dfj docker lucj', likes: 4444},
{place:'Vigo', date:'22/05/2022', body:'Sskfakjñ jdhfjkj hadjkfj f jdkf nadsnf jf ajdfn ndf djf najdnfuadnan jnjkdvn cjnvjncj vnijsnfijvn sdjvn jsdnvj nsf', likes: 9913}, 
{place: 'Pontevedra', date:'30/11/2025', body:'Pnjsdkjd jsdjfjjgh jfgjkd fjkghdfj ghdf ngjksjdhf gkdjfkjgdkjfg hdjkhfgjk dsfgjk fjgnjdsfgj dfkjg ndjskfng kjdnfkjdjfnvkjd jfv dkj', likes: 1},]

const HomeScreen = () => {
    return(
        <View>
            <TopBar/>
            <ScrollView
            style={homeStyles.scrollStyle}
                contentInsetAdjustmentBehavior="automatic">
                <Post place="Santiago de Compostela" date="14/02/2077" body="fa,smdklg kadsfj gksjdf gklsaj dgklajs dlkgj akdfj gkjasdf jjgklasjdf gkjadsf kgja kfkj gkadjf gkajdf klgj kdfj gkdjf kgjdfkl jglskd"/>
                {posts.map((post) => (
                    <Post key={post.date} place={post.place} date={post.date} body={post.body} likes={post.likes}/>
                ))}
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
        backgroundColor: 'black'
    }
});

export default HomeScreen;