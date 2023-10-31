// Express library is used for routing
// for example if we are hitting route then express will trigger specific function based on that
const express = require('express');

const app = express();

const Jwt = require('jsonwebtoken')

const path = require('path')

const body_parser = require('body-parser')

const http = require('http').Server(app)

const io = require('socket.io')(http)

global.io=io


const userRouter = require('./routers/user.router')

const todoRouter = require('./routers/todo.router')

app.get('/',function(req,res){
    var options = {
        root: path.join(__dirname)
    }
    let fileName = 'index.html'
    res.sendFile(fileName,options)
})

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

// Http needs to listern otherwise socket will be not connected 
http.listen(3000, function() {
    console.log(`Server started http://localhost:3000`);
 });
 
 // This custom path for socket
 let socketIO =  io.of('/socket')


 socketIO.use((socket, next) => {
    const token = socket.handshake.query.token;
    if (token) {
      try {
        const decoded = Jwt.verify(token, 'secretKey'); // Verify the token using your secret key
        socket.userId = decoded._id; // Attach the user ID to the socket for reference
        next(); // Continue with the socket connection
      } catch (error) {
        next(new Error('Invalid token')); // Handle invalid tokens here
      }
    } else {
      next(new Error('Token missing')); // Handle missing tokens here
    }
  });


 socketIO.on('connection',function(socket){
   console.log('User connected to socket')
   socket.join(socket.userId)


   socketIO.to(socket.userId).emit('connectedRoom', `connected to the roomId ${socket.userId} `)

   socket.on('disconnect',function(){
    console.log('User disconnect to socket')
   })
})



module.exports =  {
    app
} 