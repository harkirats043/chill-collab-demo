var express = require('express');
var router = express.Router();
const citiesCtrl = require('../controllers/cities');

/* GET users listing. */
router.get('/new', citiesCtrl.new);

/* GET cities show / detail view - /cities/:id */
router.get('/:id', citiesCtrl.show);

router.post("/",citiesCtrl.create)


// GET /cities index view
router.get('/', citiesCtrl.index);

module.exports = router;
