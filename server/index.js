require('dotenv').config();
const server = require('./server.js');

const OPTIONS = require('./config/options.js');

server.start(OPTIONS,() => {
  console.log(`servers is up and running on port ${OPTIONS.port}`);
});
