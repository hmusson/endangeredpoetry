var mongoose = require('mongoose');
var Poems = mongoose.model('Poem');

module.exports.poemGetAll = function(req, res) {

  console.log('Read All Poems');

  Poems
    .find()    //exec tells to execute query 
    .exec(function(err, poems) {    //poems is the return data
      console.log("Found Poems", poems.length);
      //console.log(poems);
      res
        .json(poems);  // creates json response with the data 
    });

};


module.exports.poemGetOne = function(req, res) {
  console.log('Read one poems');
  var id = req.params.poemId;
  console.log('req.params ', req.params);
  console.log('GET poemId', id);

  Poems
    .findById(id)
    .exec(function(err, doc) {
      if (err) {
        console.log("can't get poems", id);
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(200)
          .json(doc);
      }  
    });

};


module.exports.poemAddOne = function(req, res) {
  console.log("POST new poem");

  console.log('req params body' , req.params, req.body);

  Poems
    .create({
      name : req.body.name,
      text1 : req.body.text1,
      text2 : req.body.text2,
      text3 : req.body.text3,
      tags : req.body.tags
     
    }, function(err, poems) {
      if (err) {
        console.log("can't create poem");
        res
          .status(400)
          .json(err);
      } else {
        console.log("Job done", poems);
        res
          .status(201)
          .json(poems);
      }
    });
};

module.exports.poemUpdateOne = function(req, res) {
  var poemId = req.params.poemId;

  console.log('Update poem', poemId);

  Poems
    .findById(facultyId)
    .exec(function(err, poems) {
      if (err) {
        console.log("Error");
        res
          .status(500)
          .json(err);
          return;
      } else if(!poems) {
        console.log("Poem not found", poemId);
        res
          .status(404)
          .json({
            "message" : "Poem not found " + poemId
          });
          return;
      }

      poems.name = req.body.name;
      poems.text = req.body.text;
      poems.tags = req.body.tags; 

      poems
        .save(function(err, poemsUpdated) {
          if(err) {
            res
              .status(500)
              .json(err);
          } else {
            res
              .status(204)
              .json();
          }
        });


    });

};

var _splitArray = function(input) {
  var output;
  if (input && input.length > 0) {
    output = input.split(";");
  } else {
    output = [];
  }
  return output;
};


module.exports.poemDeleteOne = function(req, res) {
  var poemId = req.params.poemId;

  Poems
    .findByIdAndRemove(poemId)
    .exec(function(err, poem) {
      if (err) {
        res
          .status(404)
          .json(err);
      } else {
        console.log("Poem deleted, id:", poemId);
        res
          .status(204)
          .json();        
      }
    });
};








