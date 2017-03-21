/* GET 'home' page */
module.exports.homelist = function(req, res){
	res.render('index', { title: 'Home' });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res){
	res.render('index', { title: 'Location info' });
};

/* GET 'poem' page */
module.exports.poemList = function(req, res){
	res.render('benjitest', { title: 'Poem' });
};//not sure why it's not working? in index.js

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
	res.render('index', { title: 'Add review' });
};