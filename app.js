console.log("hello world");
console.table(["bindhya", "gomathi"]);

var http = require ('http');

// http.createServer(function (req, res){
    // res.write("Hai Bindhya...Welcome..!");
    // res.end();
    // res.writeHead(200,{"content-type": "text/html"})
    // res.end("Hai Bindhya...Welcome..!");

// }).listen(9000);

var calc = require("./calc.js");

console.log("Add : " + calc.add(3,4) + ", sub : " +calc.sub(15, 2) );
console.log("process:  ", process.argv, process.argv.slice(1));


// NEW PROJECT

const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost/local";

const app = express();
app.use(express.json())

mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection

con.on("open", function(){
    console.log("Connected .....")
});

const studentRouter = require('./routes/studentList');
app.use('/student', studentRouter);

app.listen(9000,()=>{
    console.log('localhost listening ...')
});
