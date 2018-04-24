/* Constants */
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser');
const bookRouter = require('./routes/book-routes');
const bookModule = require('./modules/book-module');

const Book = require('./models/book.schema');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/books', bookRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));