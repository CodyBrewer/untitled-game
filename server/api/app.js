const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// Implement Third-Party Middleware
app.use(helmet());
app.use(cors());

// app.get('/', (req, res) => {
//   res.send({ server: "up" });
// });

module.exports = app;
