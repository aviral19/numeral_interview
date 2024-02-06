const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    getCities: [City]
  }

  type City {
    id: ID!
    name: String
    longitude: Float
    latitude: Float
    temperature: Float
  }
`;

module.exports = { typeDefs };
