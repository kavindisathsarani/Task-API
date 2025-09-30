const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const tasksRoute = require('./routes/tasks');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/tasks', tasksRoute);

// health-check
app.get('/', (req, res) => res.send('Task API running'));

app.use(errorHandler);

module.exports = app;
