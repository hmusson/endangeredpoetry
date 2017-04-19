var express = require('express');
var router = express.Router();
var ctrlPoems = require('../controllers/poems');
var ctrlComments = require('../controllers/comments');

// CRUD actions for poems 
router
    .route('/poems')
    //.get(ctrlPoems.buildPoemList)
    .post(ctrlPoems.poemsCreate)
    .put(ctrlPoems.poemsUpdateOne)
    .delete(ctrlPoems.poemsDeleteOne);


router
    .route('/poems/:poemid')
    .put(ctrlPoems.poemsUpdateOne)
    .delete(ctrlPoems.poemsDeleteOne)
    .get(ctrlPoems.poemsReadOne);

//router.post('/poems', ctrlPoems.poemsCreate); //create
//router.get('/poems/:poemid', ctrlPoems.poemsReadOne); //read
//router.put('/poems/:poemid', ctrlPoems.poemsUpdateOne); //update
//router.delete('/poems/:poemid', ctrlPoems.poemsDeleteOne); //mmmmove to the trash


router.post('/poems/:poemid/comments', ctrlComments.commentsCreate);
router.get('/poems/:poemid/comments/:commentid', ctrlComments.commentsReadOne);
router.put('/poems/:poemid/comments/:commentid', ctrlComments.commentsUpdateOne);
router.delete('/poems/:poemid/comments/:commentid', ctrlComments.commentsDeleteOne);




module.exports = router;