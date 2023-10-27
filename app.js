// Express library is used for routing
// for example if we are hitting route then express will trigger specific function based on that
const express = require('express');

const Jwt = require('jsonwebtoken')

const body_parser = require('body-parser');


const userRouter = require('./routers/user.router')

const todoRouter = require('./routers/todo.router')


const app = express();

 app.use(body_parser.json());

 app.use('/',userRouter);

 app.use('/todo',(req, res, next) => {
    // Get the token from the Authorization header
    const token = req.headers.authorization;
    if (token) {
        // Extract the token without the 'Bearer ' prefix
        const tokenWithoutPrefix = token.split(' ')[1];
        try {
            // Verify the token
            const decoded = Jwt.verify(tokenWithoutPrefix, 'secretKey'); // Replace 'your-secret-key' with your actual secret key
            req.userId = decoded._id; // Store the userId in the request object for further use
            next(); // Continue to the next middleware or route handler
        } catch (error) {
            // Token is invalid
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        // Token is missing
        res.status(401).json({ message: 'Token missing' });
    }
},todoRouter)

module.exports = app;