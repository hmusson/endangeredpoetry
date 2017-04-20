var mongoose = require('mongoose');
var Poe = mongoose.model('Poem');

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
    Poe
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
  console.log(req.body);
  Poe.create({

    name: req.body.name,
    text: req.body.text,
    tags: req.body.tags

    //fitting with whatever the poem schema goes here

  }, function(err, location) {
    if (err) {
      console.log(err);
      sendJSONresponse(res, 400, err);
    } else {
      console.log('added poem', poem);
      sendJSONresponse(res, 201, location);
    }
  });
};

/* PUT /api/locations/:locationid */
// module.exports.locationsUpdateOne = function(req, res) {
//   if (!req.params.locationid) {
//     sendJSONresponse(res, 404, {
//       "message": "Not found, locationid is required"
//     });
//     return;
//   }
//   Loc
//     .findById(req.params.locationid)
//     .select('-reviews -rating')
//     .exec(
//       function(err, location) {
//         if (!location) {
//           sendJSONresponse(res, 404, {
//             "message": "locationid not found"
//           });
//           return;
//         } else if (err) {
//           sendJSONresponse(res, 400, err);
//           return;
//         }
//         location.name = req.body.name;
//         location.address = req.body.address;
//         location.facilities = req.body.facilities.split(",");
//         location.coords = [parseFloat(req.body.lng), parseFloat(req.body.lat)];
//         location.openingTimes = [{
//           days: req.body.days1,
//           opening: req.body.opening1,
//           closing: req.body.closing1,
//           closed: req.body.closed1,
//         }, {
//           days: req.body.days2,
//           opening: req.body.opening2,
//           closing: req.body.closing2,
//           closed: req.body.closed2,
//         }];
//         location.save(function(err, location) {
//           if (err) {
//             sendJSONresponse(res, 404, err);
//           } else {
//             sendJSONresponse(res, 200, location);
//           }
//         });
//       }
//   );
// };

module.exports.poemsUpdateOne = function(req, res) {
  if (!req.params.locationid) {
    sendJSONresponse(res, 404, {
      "message": "Not found, poemid is required"
    });
    return;
  }
  Poe
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

/* DELETE /api/locations/:locationid */
// module.exports.locationsDeleteOne = function(req, res) {
//   var locationid = req.params.locationid;
//   if (locationid) {
//     Loc
//       .findByIdAndRemove(locationid)
//       .exec(
//         function(err, location) {
//           if (err) {
//             console.log(err);
//             sendJSONresponse(res, 404, err);
//             return;
//           }
//           console.log("Location id " + locationid + " deleted");
//           sendJSONresponse(res, 204, null);
//         }
//     );
//   } else {
//     sendJSONresponse(res, 404, {
//       "message": "No locationid"
//     });
//   }
// };

module.exports.poemsDeleteOne = function(req, res) {
  var poemid = req.params.poemid;
  if (poemid) {
    Poe
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
