const { GraphQLServer, } = require('graphql-yoga');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
  type Query {
    info: String!
  }
`

const resolvers = {
  Query: {
    info: () => `This is the API for Cody's Untitled Game.`
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const server = new GraphQLServer({
  schema
})

module.exports = {
  schema,
  server
};