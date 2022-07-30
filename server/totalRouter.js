const express = require('express');
const router = express.Router();

const index = require('../src/index');
const loginController = require('../src/login/LoginController');

router.use(index);
router.use(loginController);

module.exports = router;

