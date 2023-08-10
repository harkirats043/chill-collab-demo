var express = require('express');
var router = express.Router();
const citiesCtrl = require('../controllers/cities');

/* GET users listing. */
router.get('/new', citiesCtrl.new);

module.exports = router;
