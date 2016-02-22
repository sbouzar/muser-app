var router = require('express').Router();
var passport = require('passport');

import path = require('path');

import mainController from '../controllers/main';

router.post('/register', mainController.postRegister);

router.post('/signin', mainController.postSignIn);



router.get('/*', mainController.getIndex);


module.exports = router;