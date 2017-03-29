/* GET 'about' page */
module.exports.about = function(req, res){
  res.render('index', { title: 'About' });
};

module.exports.poem2function = function(req, res){
	res.render('poem2', {title: 'anything'});
};

