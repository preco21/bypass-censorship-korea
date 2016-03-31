var net = require('net');
 
var proxyPort = 8080;
var tcpServerPort = 80;
 
// proxy server
var proxy = net.createServer(function (socket) {
    var client;
 
    console.log('Client connected to proxy');
 
    // Create a new connection to the TCP server
    client = net.connect(tcpServerPort);
 
 
	
    // 2-way pipe between client and TCP server
    client.pipe(socket);
	
	socket.on("data", function(data)
	{
		client.write(data);
	});
 
    socket.on('close', function () {
        console.log('Client disconnected from proxy');
    }); 
 
    socket.on('error', function (err) {
        console.log('Error: ' + err.soString());
    });
});
 
// a simple TCP server for testing
var server = net.createServer(function (socket) {
    console.log('Client connected to server');
 
    socket.on('close', function () {
        console.log('Client disconnected from server');
    }); 
 
    socket.on('data', function (buffer) {
        // 'echo' server
        socket.write(buffer);
    });
 
    socket.on('error', function (err) {
        console.log('Error: ' + err.soString());
    });
});
 
server.listen(tcpServerPort);
proxy.listen(proxyPort);