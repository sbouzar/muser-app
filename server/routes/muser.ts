var router = require('express').Router();
import path = require('path');

import mainController from '../controllers/main';

router.post('/register', mainController.postRegister);

router.get('/*', mainController.getIndex);


module.exports = router;