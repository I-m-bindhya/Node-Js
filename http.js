// Node.js program to demonstrate the
// server.setTimeout() APi
	
// Importing http module
var http = require('http');

// Request and response handler
const http2Handlers = (request, response) => {
	
// Getting the reference of the
// underlying socket object
// by using socket API
const value = response.socket;
	
// Display result
// by using end() api
response.end( "socket local address : "
	+ value.localAddress, 'utf8', () => {
	console.log("Displaying the result...");
});
};
	
// Listening to http Server
// by using listen() api
var httpServer = http.createServer(
	http2Handlers).listen(3000, () => {
	console.log("Server is running at port 3000...");
});

httpServer.setTimeout(100,()=>{
	console.log(
	"Socket is destroyed due to timeout")
	
	// Closing server
	// by using close() api
	httpServer.close(()=>{
		console.log("Server is closed")
	})
	})