var express = require('express');
var router = express.Router();
let controllers = require('../controllers/posts');

//list of posts
router.get('/', controllers.list);
//detail of post
router.get('/:id', controllers.detail);

module.exports = router;
