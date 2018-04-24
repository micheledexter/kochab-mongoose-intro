const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bookModule = require('../modules/book-module');
const Book = require('../models/book.schema');

/* Connecting to Mongo: start */
const databaseUrl = 'mongodb://localhost:27017/library';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error);
});
/* Connecting to Mongo: end */

/* Get route for '/books': start */
router.get('/', (req, res) => {
    console.log('GET: /books');
    // database read/find
    Book.find({}).then((dataFromDatabase) => {
        // database read/find: successful
        console.log('data from database', dataFromDatabase);
        res.send(dataFromDatabase);
    }).catch((error) => {
        // database read/find: error
        console.log('error with Book.find', error);
        res.sendStatus(500);
    });
});
/* Get route for '/books': end */

module.exports = router;