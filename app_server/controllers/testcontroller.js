var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  //we'll need to change the heroku url
  apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}



var renderHomepage = function(req, res, responseBody){
  res.render('homepage', {
    title: 'Endangered Poetry -- Poems about endangered animals',
    pageHeader: {
      title: 'Endangered Poetry',
      strapline: 'Endangered Plants + Animals!'
    },
    sidebar: "Looking to help endangered plants + animals? This site helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Endangered Poetry help you find the place you're looking for."
   });
};


/* GET 'home' page */
module.exports.poem = function(req, res){
  renderHomepage(req, res);
};

module.exports.poemlist = function(req, res){
  renderHomepage(req, res);
};

module.exports.poemInfo = function(req, res){
  renderHomepage(req, res);
};

module.exports.addComment = function(req, res){
  renderHomepage(req, res);
};

module.exports.doAddComment = function(req, res){
  renderHomepage(req, res);
};