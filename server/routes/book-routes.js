const express = require('express');
const router = express.Router();
const bookModule = require('../modules/book-module');

router.get('/', (req, res) => {
    console.log('GET: /book');
    res.send(bookModule);
});

module.exports = router;