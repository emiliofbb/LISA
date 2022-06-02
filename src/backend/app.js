require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const app = express();

app.get("/", (req, res) =>
  res.send("Welcome to my express server to make queries go to /graphql")
);

module.exports = app;

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.use("*", (req, res) => res.status(404).send("Not found"));

  app.listen(process.env.PORT, () => {
    console.log("Graphql server listening at: " + process.env.PORT);
  });
}

start();
