var express = require('express');
var router = express.Router();
let controllers = require('../controllers/posts');

//list of posts
router.get('/', controllers.list);
//detail of post
router.get('/:id', controllers.detail);
//create of post
router.post('/', controllers.create);
//update post
router.put('/', controllers.update);


module.exports = router;
