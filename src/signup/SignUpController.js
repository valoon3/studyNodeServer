const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('../login/loginStateMiddleware');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
});

router.get('/profile', isLoggedIn, (req, res) => {
    res.send('profile');
});

router.get('/join', isNotLoggedIn, (req, res) => {
    res.send('join');
})

module.exports = router;