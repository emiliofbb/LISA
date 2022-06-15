const {gql} = require('apollo-server-express')

const typeDefs = gql`

    type Query {
        hello: String
        user(username: String!): User
        users: [User]
        location(idlocation: ID!): Location
        numberLikes(idpost: ID!): String
        searchedPost(input: searchedPostInput!): Location
        login(input: UserInput!): Boolean
    }

    type Mutation {
        createUser(input: UserInput!): Boolean
        createPost(input: PostInput!): Boolean
        like(input: LikeInput!): Boolean
        unlike(input: LikeInput!): Boolean
    }

    input LikeInput {
        idpost: ID!
        username: String!
    }

    input searchedPostInput {
        idlocation: ID!
        regex: String!
    }

    input PostInput {
        postdate: String!
        posttext: String!
        idlocation: ID!
        username: String!
    }

    input UserInput {
        username: String!
        keyword: String!
    }

    type Location {
        idlocation: ID!
        namelocation: String!
        coords: String!
        posts: [Post!]
    }

    type Post {
        idpost: ID!
        postdate: String!
        posttext: String!
        location: Location
        writer: User
        likes: [User]
    }

    type User {
        username: String!
        posts: [Post!]
    }
`

module.exports = {typeDefs}