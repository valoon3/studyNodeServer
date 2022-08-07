const passport = require('passport');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        User.findOne({ where: {id}})
            .then(user => done(null, user))
            .catch(err => done(err));
    })
}