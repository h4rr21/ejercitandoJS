const mongoose = require('mongoose');
const schema = mongoose.Schema;

const modelBook = new schema({
    "tittle" : {type:String},
    "desc" : {type:String}
});

module.exports = mongoose.model('books', modelBook);