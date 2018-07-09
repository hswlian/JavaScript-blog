//引入http模块
var http = require('http');
var express = require('express'),
    app=express(), //引入express模块
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
    app.use('/', express.static(__dirname + '/www')); //指定静态HTML文件的位置
    server.listen(3000);

    io.sockets.on('connection', function(socket) {
        socket.on('login', function(nickname) {
            io.sockets.emit('login', nickname);
        });
    });
console.log('server started');