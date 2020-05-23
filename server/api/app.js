const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// Implement Third-Party Middleware
app.use(helmet());
app.use(cors());

module.exports = app;
