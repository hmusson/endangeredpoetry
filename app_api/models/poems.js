var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    author: {type: String, required: true},
    reviewText: {type: String, required: true},
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var poemSchema = new mongoose.Schema({
    author: {
    	type: String,
    	required: true
    },
    title: {
    	type: String,
    	required: true
    },
    text: {
    	type: String,
    	required: true
    },
    tags:[String],
    location: {
        type: [Number],
        index: '2dsphere'
    },
    date: Date,
    comments: [commentSchema]
});

mongoose.model('Poem', poemSchema);