const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const resolver = require("./graphql/resolver");
const typeDefs = require("./graphql/typeDefs").typeDefs;

const server = new ApolloServer({ resolver, typeDefs });

server.listen(3001).then(({ url }) => {
  console.log(`Server started at port ${url}`);
});
