var express = require('express');
var router = express.Router();
const citiesCtrl = require('../controllers/cities');

/* GET users listing. */
router.get('/new', citiesCtrl.new);

router.post("/",citiesCtrl.create)


// GET /cities index view
router.get('/', citiesCtrl.index);

module.exports = router;
