const express = require('express');
const bookRouter = express.Router();

bookRouter.get('/',(re1, res, next)=>{
    //TODO: Enviar todos los libros
    res.send("todos los libros");
});

bookRouter.get('/:id',(req, res, next)=>{
    const id = req.params.id;
    //TODO:  Enviar el libr con su id
    res.send("el id que mandaste es",id);
});

module.exports = bookRouter;