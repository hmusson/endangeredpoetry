var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    author: {
        type: String, 
        required: true
    },
    reviewText: {
        type: String, 
        required: true
    },
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

// var poemSchema = new mongoose.Schema({
//     author: {
//     	type: String,
//     	required: true
//     },
//     title: {
//     	type: String,
//     	required: true
//     },
//     text: {
//     	type: String,
//     	required: true
//     },
//     tags:[String],
//     date: Date,
//     comments: [commentSchema]
// });

var poemSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    text1: {
        type: String,
    },
    text2 : {
        type: String,
    },
    text3: {
        type: String,
    },
    tags: {
        type: [String],
    }

});

mongoose.model('Poem', poemSchema);