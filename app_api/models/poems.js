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
    text: {
        type: String,
    },
    tags: {
        type: String,
    }

});

mongoose.model('Poem', poemSchema);