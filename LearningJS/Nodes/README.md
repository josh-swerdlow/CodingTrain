# Nodes, Web Sockets, and node.js

## Introduction

This folder contains the relevant files for [The Coding Train's][codingTrain] [Websockets and P5.js Intro to Node.js][websockets] series and [Traversy Media's][traversy] [Node.js Tutorial][nodejs].

This will mostly focus on getting an introduction to node.js and whatever it helps with. I just want to get a sense for what the library is used for. I doubt I will be creating any projects from this.

## Notes


### Background Concepts
node.js is a javascript library that allows the user to do server side programming to host ones web application. Then users from around the world can connect to this server through sockets to access your web app. Somewhat importantly node.js uses an event-driven, non-blocking I/O model.

#### Blocking vs Non-Blocking I/O

Normally, when someone hosts and application on a server every action and request spawns a new thread on the server. This thread takes up system memory and blocks other processes from occurring. In node.js, the server uses non-blocking calls which allows the server to have thousands of events occurring simultaneously in the event loop.

#### Event Loop

The event loop is a single thread that support concurrent execution using events and callbacks. The `EventEmitter` class is used to bind events and event listeners.


### Setting Up Dependencies
So first things first, one must get the web app onto the server by putting the appropriate javascript, html, css files on the server. We will be using Express to do this. In order to install Express, one can use npm (node package manager).

First set up the package manager in the correct directory by using the following command and filling out the settings as prompted.
```
npm init
```
Second, install express using the following command. This will make the express module a dependency of the current directory.
```
npm install express --save
```
Now you are ready to host files on the server!

### Hosting Files on a Local Server
As explained above, we will be using the express module to set up our server.

First "import" the module into the current scope.
```
// Equivalent to python's "import numpy as np"
var express = require('express');
```

Then set up the server object to whatever port you require.
```
// Set up the server to local host port 3000
var app = express();
var server = app.listen(3000);
```

Finally, instruct the server grab the static files (js, html, css) from the directory path `./public` in this case.
```
// The files being hosted are static and found in ./public
app.use(express.static('public'))
```

## Server Client Communication Using Sockets

As discussed in the beginning node.js allows us to do server side programming such that we can host files for clients to access and view through sockets.

### Install socket.io Module

Install the socket.io module using npm.

```
npm install socket.io --save
```

### Creating a server side socket

First, one must "import" the socket.io module as usual.
```
// Equivalent to python's "import numpy as np"
var socket = require('socket.io');
```

Then call the socket module on the server we already have setup.
```
// Set up the socket class to connect with the server
var io = socket(server);
```
Finally, a socket connection can be opened with a call back function to activate on a connection.

```
// Set up a socket connection and a call back function
// on that connection
io.sockets.on('connection', newConnection);
function newConnection(socket) {
    console.log("new connection at: " + socket.id);
}
```

Simply doing this only creates a socket on the server side. The client must still connect to the socket.

```
// Connect to servers socket!
var socket = io.connect('https://localhost:3000');
```


## Fun Coding Ideas


[codingTrain]: https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw
[traversy]: https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA
[websockets]: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6b36TzJidYfIYwTFEq3K5qH
[nodejs]: https://www.youtube.com/watch?v=U8XF6AFGqlc
