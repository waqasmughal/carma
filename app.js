const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// initialize enviornment variables
require('dotenv').config({ path: '.env' }); 

// include and sync all db models and create table schema if not exists
const db = require('./models'); 
db.sequelize.sync(); 

// include controllers routing path
const indexRouter = require('./routes/index');
const creditcardsRouter = require('./routes/creditcard.server.routes'); 

// initialize express app logic
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/v1/api/creditcards', creditcardsRouter);

// export app logic
module.exports = app;
