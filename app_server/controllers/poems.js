/*testing jade writepoem file*/
module.exports.writePoem = function(req, res) {
  res.render('writepoem', {title: 'Write a new poem'})
};

/* GET 'home' page */
  module.exports.homelist = function(req, res){
res.render('index', { title: 'Home' });
};

/* GET 'poem' page */
module.exports.poemList = function(req, res){
  res.render('singlepoemtest', { title: 'Poem' });
};

/* GET 'Add review' page */
module.exports.addComment = function(req, res){
  res.render('poem-comment-form', { title: 'Add comment' });
};


var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  //we'll need to change the heroku url
  apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}

var _isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var _showError = function (req, res, status) {
  var title, content;
  if (status === 404) {
    title = "404, page not found";
    content = "Oh dear. Looks like we can't find this page. Sorry.";
  } else if (status === 500) {
    title = "500, internal server error";
    content = "How embarrassing. There's a problem with our server.";
  } else {
    title = status + ", something's gone wrong";
    content = "Something, somewhere, has gone just a little bit wrong.";
  }
  res.status(status);
  res.render('generic-text', {
    title : title,
    content : content
  });
};

var renderHomepage = function(req, res, responseBody){
  res.render('bootstraptest', {
    title: 'Endangered Poetry -- Poems about endangered animals',
    pageHeader: {
      title: 'Endangered Poetry',
      //strapline: 'Poetry about Endangered Plants + Animals'
    },
    sidebar: "Looking to help endangered plants + animals? This site helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Endangered Poetry help you find the plant or animal you're looking for."
   });
};

/* GET 'home' page */
module.exports.poemhome = function(req, res){
  renderHomepage(req, res);
};


var getPoemInfo = function (req, res, callback) {
  var requestOptions, path;
  path = "/api/poems/" + req.params.poemid;
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {}
  };
  request(
    requestOptions,
    function(err, response, body) {
      var data = body;
      if (response.statusCode === 200) {
        data.coords = {
          lng : body.coords[0],
          lat : body.coords[1]
        };
        callback(req, res, data);
      } else {
        _showError(req, res, response.statusCode);
      }
    }
  );
};

//This one might have to be added back or modified for our site
var renderDetailPage = function (req, res, poemDetail) {
  res.render('poem-info', {
    title: poemDetail.name,
    pageHeader: {title: poemDetail.name},
    poem: poemDetail
  });
};

/* GET 'Poem info' page */
module.exports.poemInfo = function(req, res){
  getPoemInfo(req, res, function(req, res, responseData) {
    renderDetailPage(req, res, responseData);
  });
};

var renderCommentForm = function (req, res, pomDetail) {
  res.render('poem-comment-form', {
    title: 'Comment ' + pomDetail.name + ' on This Poem',
    pageHeader: { title: 'Comment ' + pomDetail.name },
    error: req.query.err,
    url: req.originalUrl
  });
};

/* GET 'Add comment' page */
module.exports.addComment = function(req, res){
  getPoemInfo(req, res, function(req, res, responseData) {
    renderCommentForm(req, res, responseData);
  });
};

/* POST 'Add Comment' page */
module.exports.doAddComment = function(req, res){
  var requestOptions, path, poemid, postdata;
  poemid = req.params.poemid;
  path = "/api/poems/" + poemid + '/comments';
  postdata = {
    author: req.body.name,
    commentText: req.body.comment
  };
  requestOptions = {
    url : apiOptions.server + path,
    method : "POST",
    json : postdata
  };
  if (!postdata.author || !postdata.rating || !postdata.reviewText) {
    res.redirect('/poem/' + poemid + '/comments/new?err=val');
  } else {
    request(
      requestOptions,
      function(err, response, body) {
        if (response.statusCode === 201) {
          res.redirect('/poem/' + poemid);
        } else if (response.statusCode === 400 && body.name && body.name === "ValidationError" ) {
          res.redirect('/poem/' + poemid + '/comments/new?err=val');
        } else {
          console.log(body);
          _showError(req, res, response.statusCode);
        }
      }
    );
  }
};