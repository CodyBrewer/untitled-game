const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers/index.js');

const typeDefs = `
  type Query {
    info: String!
  }
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
