require('dotenv').config();
const server = require('./graphql/server.js');

const OPTIONS = require('./config/options.js');

server.start(OPTIONS,() => {
  console.log(`servers is up and running on port ${OPTIONS.port}`);
});
