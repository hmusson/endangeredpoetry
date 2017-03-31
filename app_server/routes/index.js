var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
router.post('/location/:locationid/review/new', ctrlLocations.doAddReview);
//router.get('/poemList',ctrlLocations.poemList); 


/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/poem2', ctrlOthers.poem2function);

module.exports = router;
