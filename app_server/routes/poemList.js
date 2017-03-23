var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');

router.get('/poemList',ctrlLocations.poemList); 

module.exports = router;