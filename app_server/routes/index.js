var express = require('express');
var router = express.Router();
var ctrlOthers = require('../controllers/others');
var ctrlPoems = require('../controllers/poems');

var ctrlTest = require('../controllers/testcontroller');

/* Poems pages */
router.get('/', ctrlPoems.poemhome);
router.get('/poem', ctrlPoems.poemInfo);
router.get('/poem/comment/new', ctrlPoems.addComment);
router.post('/poem/:poemid/comment/new', ctrlPoems.doAddComment);

/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/poem2', ctrlOthers.poem2function);
router.get('/poem3', ctrlOthers.poem3function);

module.exports = router;

// //testing where the error is
// router.get('/', ctrlTest.poemlist);
// router.get('/poem', ctrlTest.poemInfo);
// router.get('/poem/comment/new', ctrlTest.addComment);
// router.post('/poem/:poemid/comment/new', ctrlTest.doAddComment);