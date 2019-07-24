const express = require('express');

const books = require('../books/booksModel');

const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors('*'));

server.get('/', (req, res) => {
    res.status(200).json({ server: 'Server up and running!' });
})



module.exports = server;