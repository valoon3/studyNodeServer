const express = require('express');
const router = express.Router();

const index = require('../src/index');
const loginController = require('../src/login/LoginController');

router.use(index);
router.use('/login', loginController);

module.exports = router;

