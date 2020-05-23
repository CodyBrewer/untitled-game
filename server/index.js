require('dotenv').config();
const server = require('./api/app.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`...server listening on port: ${PORT}`);
});
