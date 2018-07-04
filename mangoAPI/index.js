const express = require('express');
const booksRouter = require('./routes/routes-books')
const mongoose = require('mongoose');

const app = express();
var port = 3000;
const db = mongoose.connect('mongodb://admin:Passw0rd@ds125831.mlab.com:25831/librillos');


app.use('/book',booksRouter);

app.listen(port, ()=>{
    console.log("Servidor en http://localhost: ",port);
})