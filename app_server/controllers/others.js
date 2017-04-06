/* GET 'about' page */
module.exports.about = function(req, res){
  res.render('aboutpage', { title: 'About' });
};

module.exports.poem2function = function(req, res){
	res.render('poem2', {title: 'anything'});
};

module.exports.poem3function = function(req, res){
	res.render('singlepoemtest', {title: 'whatever'});
};
