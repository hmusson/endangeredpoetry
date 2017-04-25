var express = require('express');
var router = express.Router();

var ctrlPoems = require('../controllers/poems.js');
//var ctrlComments = require('../controllers/comments');


// router.post('/poems', ctrlPoems.poemsCreate); //create
// router.get('/poems/:poemid', ctrlPoems.poemsReadOne); //read
// router.put('/poems/:poemid', ctrlPoems.poemsUpdateOne); //update
// router.delete('/poems/:poemid', ctrlPoems.poemsDeleteOne); //mmmmove to the trash


// router.post('/poems/:poemid/comments', ctrlComments.commentsCreate);
// router.get('/poems/:poemid/comments/:commentid', ctrlComments.commentsReadOne);
// router.put('/poems/:poemid/comments/:commentid', ctrlComments.commentsUpdateOne);


router
	.route('/poems')
	.post(ctrlPoems.poemAddOne)
	.get(ctrlPoems.poemGetAll);

router
	.route('/poems/:poemid')
	.get(ctrlPoems.poemGetOne)
	.put(ctrlPoems.poemUpdateOne)
	.delete(ctrlPoems.poemDeleteOne);

// router
// 	.route('/poems/:poemid/comments')
// 	.post(ctrlComments.commentsCreate);

// router
// 	.route('/poems/:poemid/comments/:commentid')
// 	.get(ctrlComments.commentsReadOne)
// 	.put(ctrlComments.commentsUpdateOne);

module.exports = router;