var express = require('express');
var app = express();
var fs = require('fs');
const bodyparser = require('body-parser')
var jsonUser = []

app.use(bodyparser.json());

fs.readFile("user.json",{encoding: 'utf8'},(error,data)=>{
    jsonUser = JSON.parse(data);
});

app.use('/users',(req, res, next)=>{
    // console.log(req);
    res.send(jsonUser);
});

app.post('/user', (req, res, next)=>{
    if (req.body.user.username) {
        if (req.body.user.email) {
            var username = req.body.user.username;
            var email = req.body.user.email;
            jsonUser.push(req.body.user);
            res.send(req.body.user);
        }else{
            res.status(400).send("Email not found");
        }
    }else{
        res.status(400).send("Username not found");
    }
})

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