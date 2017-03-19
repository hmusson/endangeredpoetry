var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

//not sure why this doesn't work? in locations.js
router.get('/location',ctrlLocations.poemList); 

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
