CREATE EXTENSION pgcrypto

CREATE TABLE USERS (
    username TEXT PRIMARY KEY,
    keyword TEXT NOT NULL
);

CREATE TABLE GEO_LOCATION (
    idLocation SERIAL PRIMARY KEY,
    nameLocation TEXT NOT NULL,
    coords TEXT NOT NULL
);

CREATE TABLE POST (
    idPost SERIAL PRIMARY KEY,
    postDate DATE NOT NULL,
    postText TEXT NOT NULL,
    username TEXT NOT NULL,
    idLocation INTEGER NOT NULL,
    CONSTRAINT fk_user
        FOREIGN KEY(username)
            REFERENCES USERS(username)
            ON DELETE SET NULL
            ON UPDATE CASCADE,
    CONSTRAINT fk_location
        FOREIGN KEY(idLocation)
            REFERENCES GEO_LOCATION(idLocation)
            ON DELETE SET DEFAULT
            ON UPDATE CASCADE
);

CREATE TABLE LIKES (
    idPost INTEGER NOT NULL,
    username TEXT NOT NULL,
    CONSTRAINT fk_user
        FOREIGN KEY(username)
            REFERENCES USERS(username)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    CONSTRAINT fk_post
        FOREIGN KEY(idPost)
            REFERENCES POST(idPost)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    PRIMARY KEY (idPost, username)
);

CREATE TABLE MESSAGES (
    idMessage SERIAL PRIMARY KEY,
    messageDate DATETIME NOT NULL,
    content TEXT NOT NULL,
    sender TEXT NOT NULL,
    receiver TEXT NOT NULL,
    CONSTRAINT fk_sender
        FOREIGN KEY(sender)
            REFERENCES USERS(username)
            ON DELETE SET NULL
            ON UPDATE CASCADE,
    CONSTRAINT fk_receiver
        FOREIGN KEY(receiver)
            REFERENCES USERS(username)
            ON DELETE SET NULL
            ON UPDATE CASCADE
);