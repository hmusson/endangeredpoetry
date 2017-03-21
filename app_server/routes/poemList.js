var express = require('express');
var router = express.Router();

router.get('/poemList',ctrlLocations.poemList); 

module.exports = router;