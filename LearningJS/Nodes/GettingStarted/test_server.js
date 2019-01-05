// Quick test file to play with node.js

// Equivalent to python's "import numpy as np"
var express = require('express');

// Set up the server to local host port 3000
var app = express();
var server = app.listen(3000);

// The files being hosted are static
app.use(express.static('public'))

console.log("Hello, World!");

// Equivalent to python's "import numpy as np"
var socket = require('socket.io');

// Set up the socket class to connect with the server
var io = socket(server);

// Set up a socket connection and a call back function
// on that connection
io.sockets.on('connection', newConnection);
function newConnection(socket) {
    console.log("new connection at: " + socket.id);
}