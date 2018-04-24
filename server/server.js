const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const bookRouter = require('./routes/book-routes');
const bookModule = require('./modules/book-module');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/book', bookRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));