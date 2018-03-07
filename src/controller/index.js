const router = require('express').Router();
const home = require('./home');

router.get('/' , home);


module.exports = router;
