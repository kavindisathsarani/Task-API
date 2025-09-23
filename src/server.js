// src/server.js
require('dotenv').config();
const app = require('./app');          // Import Express app
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
