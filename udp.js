const udp = require('dgram');

const client = udp.createSocket('udp4');
const server = udp.createSocket('udp4');

server.on("message", function(msg){
    process.stdout.write("UDP : "+  msg);
    process.exit();
}).bind(1234,()=>{
    console.log(server.address(), server.ref());
    server.addMembership('224.0.0.114');
});

client.send("Hello",0, 7, 1234, "localhost")
