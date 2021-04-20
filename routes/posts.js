var express = require('express');
var router = express.Router();
let controllers = require('../controllers/posts');

//list of posts
router.get('/', controllers.list);
//

module.exports = router;
