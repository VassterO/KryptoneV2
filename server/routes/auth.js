const express = require('express');
const passport = require('passport');
const PatreonStrategy = require('passport-patreon').Strategy;

const router = express.Router();

passport.use(new PatreonStrategy({
        clientID: process.env.PATREON_CLIENT_ID,
        clientSecret: process.env.PATREON_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/patreon/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        // Use the profile information (mainly profile.id) to find or create a user in your database
        // For now, we'll just return the profile
        return done(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

router.get('/patreon',
    passport.authenticate('patreon'));

router.get('/patreon/callback',
    passport.authenticate('patreon', { failureRedirect: '/' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3000/profile'); // Redirect to profile page on the React app
    });

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Not authenticated' });
    }
    res.json(req.user);
});

module.exports = router;
