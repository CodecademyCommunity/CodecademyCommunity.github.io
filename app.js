require('dotenv').config()
const express = require('express');
const path = require('path');
const logger = require('morgan');

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(logger('dev'));

// Serve React static files
if (isProduction) {
    app.use(express.static(path.join(__dirname, 'client/build')));
      
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

module.exports = app;
