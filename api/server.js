const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const sessions = require('express-session');
const KnexSessionStore = require('connect-session-knex')(sessions);

const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware.js');
const knex = require('../data/dbConfig.js')


const server = express();

const sessionConfiguration = {
    name: "session",
    secret: "keep it secret, keep it safe",
    saveUninitialized: false,
    resave:false,

    store: new KnexSessionStore({
        knex,
        createtable: true,

        clearInterval: 1000*60*10,
        sidfieldname: 'sid',
        tablename: 'sessions'
    }),

    cookie: {
        maxAge: 1000*60*10,
        secure: false,
        httpOnly: true
    },
};

configureMiddleware(server);
server.use(helmet());
server.use(express.json());
server.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:3000'
}));
server.use(sessions(sessionConfiguration));

server.use('/api', apiRouter);


module.exports = server;