// Express library is used for routing
// for example if we are hitting route then express will trigger specific function based on that
const express = require('express');

const body_parser = require('body-parser');


const userRouter = require('./routers/user.router')

const app =express();

 app.use(body_parser.json());

 app.use('/',userRouter);


module.exports = app;