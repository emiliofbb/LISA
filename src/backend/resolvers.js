const db = require('./db');

const resolvers = {
    Query: {
        hello: () => {
            console.log('Funsiona');
            return 'Hello World';
        },
        user: (_, args) => {
            return db.one('SELECT username FROM USERS WHERE username=$1', args.username)
                .then((userData) => {
                    userData['posts'] = db.any('SELECT idPost, postDate, postText, idLocation FROM POST WHERE username=$1 ORDER BY postDate DESC', args.username)
                    .then((data) => {
                        data.map((post) => {
                            post.postdate = post.postdate.toUTCString();
                            post['location'] = db.one('SELECT idLocation, nameLocation, coords FROM GEO_LOCATION WHERE idLocation=$1', post.idlocation)
                            .then((localData) => {
                                return localData;
                            });
                            delete post.idlocation;
                            post['likes'] = db.any('SELECT username FROM LIKES WHERE idPost=$1', post.idpost).then((likers) => {return likers});
                        });
                        return data;
                    });
                    return userData;
                });
        },
        users: () => {
            return db.any('SELECT username from users')
                .then((data) => {
                    return data;
                });
        },
        location: (_, args) => {
            return db.one('SELECT idLocation, nameLocation, coords FROM GEO_LOCATION WHERE idLocation=$1', args.idlocation)
                .then((localData) => {
                    localData['posts'] = db.any('SELECT idPost, postDate, postText, username FROM POST WHERE idLocation=$1 ORDER BY postDate DESC', localData.idlocation)
                    .then((data) => {
                        data.map((post) => {
                            post.postdate = post.postdate.toUTCString();
                            post['writer'] = db.one('SELECT username FROM USERS WHERE username=$1', post.username)
                            .then((userData) => {
                                delete post.username;
                                return userData;
                            });;
                            post['likes'] = db.any('SELECT username FROM LIKES WHERE idPost=$1', post.idpost).then((likers) => {return likers});
                        })
                        return data;
                    });
                    return localData;
                });
        },
        numberLikes: (_, args) => {
            return db.one('SELECT COUNT(username) as likes FROM LIKES WHERE idPost=$1', args.idpost)
                .then((data) => {
                    return data.likes;
                });
        },
        searchedPost: (_, args) => {
            return db.one('SELECT idLocation, nameLocation, coords FROM GEO_LOCATION WHERE idLocation=$1', args.input.idlocation)
                .then((localData) => {
                    localData['posts'] = db.any('SELECT idPost, postDate, postText, username FROM POST WHERE idLocation=${idlocation} AND posttext ~ ${regex} ORDER BY postDate DESC', args.input)
                    .then((data) => {
                        data.map((post) => {
                            post.postdate = post.postdate.toUTCString();
                            post['writer'] = db.one('SELECT username FROM USERS WHERE username=$1', post.username)
                            .then((userData) => {
                                delete post.username;
                                return userData;
                            });;
                            post['likes'] = db.any('SELECT username FROM LIKES WHERE idPost=$1', post.idpost).then((likers) => {return likers});
                        })
                        return data;
                    });
                    return localData;
            });
        },
        login: async (_, args) => {
            var matchCredentials = false;
            await db.any("SELECT username FROM USERS WHERE username=${username} AND keyword=crypt(${keyword}, keyword);", args.input)
            .then((data) => {
                if (data.length > 0) {
                    matchCredentials = true;
                } else {
                    matchCredentials = false;
                }
            })
            .catch((error) => {
                matchCredentials = false;
            });
            return matchCredentials;
        }
    },
    Mutation: {
        createUser: async (_, args) => {
            var isInserted = true;
            await db.oneOrNone("INSERT INTO USERS(username, keyword) VALUES(${username}, crypt(${keyword}, gen_salt('bf')))", args.input)
            .catch((error) => {
                isInserted = false;
            });
            return isInserted;
        },
        createPost: async (_, args) => {
            var isInserted = true;
            args.input.postdate = new Date(args.input.postdate);
            await db.oneOrNone("INSERT INTO POST(postDate, postText, idlocation, username) VALUES(${postdate}, ${posttext}, ${idlocation}, ${username})", args.input)
            .catch((error) => {
                isInserted = false;
            });
            return isInserted;
        },
        like: async (_, args) => {
            var isInserted = true;
            await db.oneOrNone("INSERT INTO LIKES(idPost, username) VALUES(${idpost}, ${username})", args.input)
            .catch((error) => {
                isInserted = false;
            });
            return isInserted;
        },
        unlike: async (_, args) => {
            var isInserted = true;
            await db.oneOrNone("DELETE FROM LIKES WHERE idPost=${idpost} AND username=${username}", args.input)
            .catch((error) => {
                isInserted = false;
            });
            return isInserted;
        },
    }
}

module.exports = {resolvers}