var express = require('express');
var router = express.Router();
//var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
var ctrlPoems = require('../controllers/poems');

var ctrlTest = require('../controllers/testcontroller');

/* Locations pages, old */
// router.get('/', ctrlLocations.homelist);
// router.get('/location', ctrlLocations.locationInfo);
// router.get('/location/review/new', ctrlLocations.addReview);
// router.post('/location/:locationid/review/new', ctrlLocations.doAddReview);

//router.get('/poemList',ctrlLocations.poemList); 

/* Poems pages, should be working, the error is somewhere in the controllers folder in controllers/poems */
router.get('/', ctrlPoems.poemhome);
router.get('/poem', ctrlPoems.poemInfo);
router.get('/poem/comment/new', ctrlPoems.addComment);
router.post('/poem/:poemid/comment/new', ctrlPoems.doAddComment);


// //testing where the error is
// router.get('/', ctrlTest.poemlist);
// router.get('/poem', ctrlTest.poemInfo);
// router.get('/poem/comment/new', ctrlTest.addComment);
// router.post('/poem/:poemid/comment/new', ctrlTest.doAddComment);




/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/poem2', ctrlOthers.poem2function);
router.get('/poem3', ctrlOthers.poem3function);

module.exports = router;