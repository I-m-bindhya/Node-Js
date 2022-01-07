const { get } = require('express/lib/response');

var tls = require('tls'), 
    fs = require("fs"),
    PORT = 1337,
    HOST = '127.0.0.1',
    value = null;

var options = {
    key: fs.readFileSync('private key.pem'),
    cert: fs.readFileSync('public-cert.pem'),
    rejectUnauthorized:false
}

var server = tls.createServer(options, function(socket){
    socket.on('data', function(data){
        console.log("Received: %s", data.toString());
        console.log(socket.address(), socket.authorized, socket.authorizationError)
    });

    server.close(()=>{
        console.log("server closed")
    })
});

server.listen(PORT, HOST, function() {
    console.log("I'm listening at %s, on port %s", HOST, PORT);
  });

var connection = tls.connect(PORT, HOST,options, function(){
    value = connection.setMaxSendFragment(16384);

    const { get } = require('http'); 
  
    // Setting host server url 
    const options = { host: 'www.geeksforgeeks.org' }; 
      
    // Requesting from geeksforgeeks server 
    const request = get(options); 
      
    console.log("writableEnded:", request.writableEnded);
    let cipher = tls.getCiphers();

    if(value){
        connection.write("tls fragment set");
        console.log("TLS Root Cert: " , tls.rootCertificates[0] );
        console.log("ciphers: " , cipher);
        console.log(connection.address(), connection.authorized, connection.authorizationError);
        connection.disableRenegotiation();
    }
    else
        connection.write("not set");

    connection.end(()=>{
        console.log("connection end")
    })
})