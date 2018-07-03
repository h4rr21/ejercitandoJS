var express = require('express');
var app = express();
var fs = require('fs');
var users = []

fs.readFile("user.json",{encoding: 'utf8'},(error,data)=>{
    JSON.parse(data).forEach((data)=>{
        users.push(`$(data.username) ($(data.role)): $(data.email)`);
        console.log(users);
    });
})

var server = app.listen(3000, ()=>{
    console.log("This app is using port", server.address().port);
})