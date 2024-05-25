// server/routes/auth.js

const express = require('express');
const passport = require('passport');
const { OAuth2Strategy } = require('passport-oauth');
const request = require('request');
const User = require('../models/User');

require('dotenv').config();

const PatreonStrategy = new OAuth2Strategy({
        authorizationURL: 'https://www.patreon.com/oauth2/authorize',
        tokenURL: 'https://api.patreon.com/oauth2/token',
        clientID: process.env.PATREON_CLIENT_ID,
        clientSecret: process.env.PATREON_CLIENT_SECRET,
        callbackURL: "https://kryptonev2.onrender.com/auth/patreon/callback"
    },
    async (accessToken, refreshToken, params, done) => {
        request({
            url: 'https://www.patreon.com/api/oauth2/v2/identity?include=memberships',
            headers: { 'Authorization': `Bearer ${accessToken}` },
            json: true
        }, async (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return done(new Error('Failed to fetch user profile from Patreon'), null);
            }

            const profileData = body.data;
            const memberships = body.included || [];

            const user = {
                id: profileData.id,
                name: profileData.attributes.full_name, // assuming full_name is available
                memberships: memberships.map(membership => ({
                    id: membership.id,
                    tier: membership.attributes.tier_title // assuming tier_title is available
                }))
            };

            try {
                const existingUser = await User.findOneAndUpdate({ id: user.id }, user, { new: true, upsert: true });
                done(null, existingUser);
            } catch (err) {
                done(err, null);
            }
        });
    });

passport.use('patreon', PatreonStrategy);

passport.serializeUser((user, done) => {
    done(null, user._id); // Store user ID in session
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

const router = express.Router();

router.get('/patreon', passport.authenticate('patreon', { scope: ['identity', 'identity.memberships'] }));

router.get('/patreon/callback', passport.authenticate('patreon', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/');
});

router.get('/user', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ isAuthenticated: true, user: req.user });
    } else {
        res.json({ isAuthenticated: false, user: null });
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
