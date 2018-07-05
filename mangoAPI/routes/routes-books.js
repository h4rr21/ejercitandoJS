const express = require('express');
const bookRouter = express.Router();
const bookModel = require('../models/model-books');

bookRouter.get('/',(req, res, next)=>{
    bookModel.find({},(err,result)=>{
        if(err){
            console.log('Error getting Book: ', err);
            res.status(500).send('Internal Server Error');
        }else{
            res.json(result);
        }
    })
});

bookRouter.post('/',(req, res, next)=>{
    const Newbook = req.body;
    bookModel.create(Newbook, (err,book)=>{
        if (err){
            res.status(500).send({err:err});
        }else{
            res.json(book);
        }
    })
});

bookRouter.delete('/:id',(req, res, next)=>{
    const id = req.params.id;
    bookModel.deleteOne({_id:id}, (err, result)=>{
        if (err){
            res.status(500).send({err:err});
        }else{
            res.json(result);
        }
    })
});

bookRouter.put('/:id',(req, res, next)=>{
    const id = req.params.id;
    const modifBook = req.body;

    bookModel.findByIdAndUpdate(id, modifBook, (err, result)=>{
        if (err){
            res.status(500).send({err:err});
        }else{
            bookModel.findById(id, (error, book)=>{
                res.json(book)
            })
        }
    })
})

bookRouter.get('/:id',(req, res, next)=>{
    const id = req.params.id;
    console.log(id)
    bookModel.findById(id,(err, book)=>{
        if (err){
            res.status(500).send({error:err});
        }else{
            res.json(book);
        }
    })
});

module.exports = bookRouter;