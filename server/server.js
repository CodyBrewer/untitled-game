const { GraphQLServer } = require('graphql-yoga');

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

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

module.exports = server;