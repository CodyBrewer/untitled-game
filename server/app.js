require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Implement Third-Party Middleware
app.use(helmet());
app.use(cors());

// Start app listening on PORT
app.listen(PORT, () => {
  console.log(`Server running and listening on port: #${PORT}`);
});
