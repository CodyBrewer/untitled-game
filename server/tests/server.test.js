const { graphql } = require('graphql');

const { schema } = require('../server.js');

const infoQuery = `
  query{
    info
  }
`

describe('GraphQL API', () => {
  it(`infoQuery returns { "data": { "info": "This is the API for Cody's Untitled Game." } }`, async () =>{
    const response = await graphql(schema, infoQuery, null, {}, {})
    expect(response.data.info).toBe("This is the API for Cody's Untitled Game.");
  });
});