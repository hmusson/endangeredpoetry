//change locations to poems

var express = require('express');
var router = express.Router();
var ctrlPoems = require('../controllers/poems');
var ctrlComments = require('../controllers/comments');

//old poem routes
//router.get('/poems', ctrlPoems.locationsListByDistance);
//originals, just for backup
// router.post('/poems', ctrlPoems.locationsCreate);
// router.get('/poems/:poemid', ctrlPoems.locationsReadOne);
// router.put('/poems/:poemid', ctrlPoems.locationsUpdateOne);
// router.delete('/poems/:poemid', ctrlPoems.locationsDeleteOne);

router.post('/poems', ctrlPoems.poemsCreate); //create
router.get('/poems/:poemid', ctrlPoems.poemsReadOne); //read
router.put('/poems/:poemid', ctrlPoems.poemsUpdateOne); //update
router.delete('/poems/:poemid', ctrlPoems.poemsDeleteOne); //mmmmove to the trash

//old comments/reviews routes
// router.post('/poems/:poemid/comments', ctrlComments.reviewsCreate);
// router.get('/poems/:poemid/comments/:commentid', ctrlComments.reviewsReadOne);
// router.put('/poems/:poemid/comments/:commentid', ctrlComments.reviewsUpdateOne);
// router.delete('/poems/:poemid/comments/:commentid', ctrlComments.reviewsDeleteOne);

router.post('/poems/:poemid/comments', ctrlComments.commentsCreate);
router.get('/poems/:poemid/comments/:commentid', ctrlComments.commentsReadOne);
router.put('/poems/:poemid/comments/:commentid', ctrlComments.commentsUpdateOne);
router.delete('/poems/:poemid/comments/:commentid', ctrlComments.commentsDeleteOne);


module.exports = router;
