var express = require('express');
var app = express();
var fs = require('fs');
var jsonUser = []

fs.readFile("user.json",{encoding: 'utf8'},(error,data)=>{
    jsonUser = JSON.parse(data);
});

app.use('/users',(req, res, next)=>{
    // console.log(req);
    res.send(users);
});

app.use('/:username',(req, res, next)=>{
    var username = req.params.username;
    var resultado = jsonUser.filter((user)=>{
        if (user.username == username)
            return true;
        else   
            return false;
    })
    if (resultado.length > 0)
        res.send(resultado[0]);
    else    
        res.status(404).send('Username not found');
})

app.use('/',(req, res, next)=>{
    // console.log(req);
    res.send(new Date());
});

var server = app.listen(process.env.PORT, ()=>{
    console.log("This app is using port", server.address().port);
});