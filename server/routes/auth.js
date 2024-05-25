const express = require('express');
const passport = require('passport');
const PatreonStrategy = require('passport-patreon').Strategy;

passport.use(new PatreonStrategy({
        clientID: process.env.PATREON_CLIENT_ID,
        clientSecret: process.env.PATREON_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/patreon/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        // Handle the profile and save it in your database
        done(null, profile);
    }
));

const router = express.Router();

router.get('/auth/patreon',
    passport.authenticate('patreon'));

router.get('/auth/patreon/callback',
    passport.authenticate('patreon', { failureRedirect: '/' }),
    function(req, res) {
        // Successful authentication
        res.redirect('/');
    });

module.exports = router;
