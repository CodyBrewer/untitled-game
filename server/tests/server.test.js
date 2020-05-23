const { graphql } = require('graphql');
const schema = require('../graphql/schema');

const infoQuery = `
  query{
    info
  }
`

describe('GraphQL API', () => {
  it(`should return "This is the API for Cody's Untitled Game." when sent infoQuery`, async () =>{
    const response = await graphql(schema, infoQuery, null, {}, {})
    expect(response.data.info).toBe("This is the API for Cody's Untitled Game.");
  });
});