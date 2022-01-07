const express = require("express");

const app = express(); 

// get method

app.get("/", function(req, res){
    res.end("Hai Bindhya...! Welcome ...!")
}).listen(9000);

// get with query parameter

app.get("/name", function(req, res){
    const name = req.query.name;

    res.send(" Hello, " + name);
})

// get with path variable

app.get("/name/:name", function(req, res){
    const name = req.params.name;

    res.send(" Hello, " + name);
})