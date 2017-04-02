//change locations to poems

var express = require('express');
var router = express.Router();
var ctrlPoems = require('../controllers/poems');
var ctrlComments = require('../controllers/comments');

router.get('/poems', ctrlPoems.locationsListByDistance);
router.post('/poems', ctrlPoems.locationsCreate);
router.get('/poems/:poemid', ctrlPoems.locationsReadOne);
router.put('/poems/:poemid', ctrlPoems.locationsUpdateOne);
router.delete('/poems/:poemid', ctrlPoems.locationsDeleteOne);

// reviews
router.post('/poems/:poemid/comments', ctrlComments.reviewsCreate);
router.get('/poems/:poemid/comments/:commentid', ctrlComments.reviewsReadOne);
router.put('/poems/:poemid/comments/:commentid', ctrlComments.reviewsUpdateOne);
router.delete('/poems/:poemid/comments/:commentid', ctrlComments.reviewsDeleteOne);

module.exports = router;
