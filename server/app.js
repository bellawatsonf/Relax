require('dotenv').config()
const axios = require('axios')
const querystring = require('querystring')
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const router = require('./routes')
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(router)

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('sendMessage', (msg) => {
    console.log(msg);
    io.emit('sendMessageToAll', msg);
  });
});

server.listen(port, () => {
  console.log('listening on :3000');
});



