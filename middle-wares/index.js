const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/body', (req, res, next)=>{
    res.json({body:req.body});
});

app.listen(process.env.PORT, ()=>{
    console.log("Server is running at localhost: ",process.env.PORT);
})