var mongoose = require('mongoose');
var Poem = mongoose.model('Poem');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


var buildPoemList = function(req, res, results, stats) {
  var poems = [];
  results.forEach(function(doc) {
    poems.push({
      //distance: theEarth.getDistanceFromRads(doc.dis),
      name: doc.obj.name,
      //address: doc.obj.address,
      //rating: doc.obj.rating,
      //facilities: doc.obj.facilities,
      _id: doc.obj._id
    });
  });
  return poems;
};



module.exports.poemsReadOne = function(req, res) {
  console.log('Finding poem details', req.params);
  if (req.params && req.params.poemid) {
    Poem
      .findById(req.params.poemid)
      .exec(function(err, poem) {
        if (!poem) {
          sendJSONresponse(res, 404, {
            "message": "poemid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(poem);
        sendJSONresponse(res, 200, poem);
        
      });
  } else {
    console.log('No poemid specified');
    sendJSONresponse(res, 404, {
      "message": "No poemid in request"
    });
  }
};



module.exports.poemsCreate = function(req, res) {
  console.log("POST new poem");

  console.log('req params body' , req.params, req.body);

  Poem
    .create({
      name : req.body.name,
      text : req.body.text,
      tags : req.body.tags
     
    }, function(err, poem) {
      if (err) {
        console.log("can't create poem");
        res
          .status(400)
          .json(err);
      } else {
        console.log("Job done", poem);
        res
          .status(201)
          .json(poem);
      }
    });
};


module.exports.poemsUpdateOne = function(req, res) {
  if (!req.params.locationid) {
    sendJSONresponse(res, 404, {
      "message": "Not found, poemid is required"
    });
    return;
  }
  Poem
    .findById(req.params.poemid)
    .select('-reviews -rating')
    .exec(
      function(err, location) {
        if (!poem) {
          sendJSONresponse(res, 404, {
            "message": "poemid not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 400, err);
          return;
        }
        poem.name = req.body.name;
        
        //etc etc. with other stuff in the schema

        poem.save(function(err, poem) {
          if (err) {
            sendJSONresponse(res, 404, err);
          } else {
            sendJSONresponse(res, 200, poem);
          }
        });
      }
  );
};


module.exports.poemsDeleteOne = function(req, res) {
  var poemid = req.params.poemid;
  if (poemid) {
    Poem
      .findByIdAndRemove(poemid)
      .exec(
        function(err, poem) {//not sure about that second parameter
          if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log("Poem id " + poemid + " deleted");
          sendJSONresponse(res, 204, null);
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "No poemid"
    });
  }
};
