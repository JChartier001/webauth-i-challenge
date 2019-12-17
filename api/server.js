const express = require('express');
const cors = require('cors');
const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware.js');

const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);
server.use(express.json());
server.use(cors())

module.exports = server;