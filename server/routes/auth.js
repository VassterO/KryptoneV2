const express = require('express');
const passport = require('passport');
const { OAuth2Strategy } = require('passport-oauth');
const request = require('request');
const User = require('../models/User');

// Load environment variables
require('dotenv').config();

const PatreonStrategy = new OAuth2Strategy({
        authorizationURL: 'https://www.patreon.com/oauth2/authorize',
        tokenURL: 'https://api.patreon.com/oauth2/token',
        clientID: process.env.PATREON_CLIENT_ID,
        clientSecret: process.env.PATREON_CLIENT_SECRET,
        callbackURL: "https://kryptonev2.onrender.com/auth/patreon/callback" // Ensure this is correct
    },
    async function(accessToken, refreshToken, params, done) {
        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);
        console.log('Params:', params);

        request({
            url: 'https://www.patreon.com/api/oauth2/v2/identity?include=memberships',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            json: true
        }, async (error, response, body) => {
            console.log('Patreon API response status:', response && response.statusCode);
            console.log('Patreon API response body:', JSON.stringify(body, null, 2));

            if (error || response.statusCode !== 200) {
                console.error('Failed to fetch user profile from Patreon:', error || body);
                return done(new Error('Failed to fetch user profile from Patreon'), null);
            }

            if (!body || !body.data) {
                console.error('No data in response:', JSON.stringify(body, null, 2));
                return done(new Error('No data in response'), null);
            }

            const profileData = body.data;
            const memberships = body.included || [];

            console.log('Profile Data:', JSON.stringify(profileData, null, 2));
            console.log('Memberships:', JSON.stringify(memberships, null, 2));

            if (!profileData.id) {
                console.error('Profile object is missing id:', JSON.stringify(profileData, null, 2));
                return done(new Error('Profile object is missing id'), null);
            }

            const user = {
                id: profileData.id,
                name: profileData.attributes.full_name, // assuming full_name is available
                memberships: memberships.map(membership => ({
                    id: membership.id,
                    tier: membership.attributes.tier_title // assuming tier_title is available
                }))
            };

            // Save user to MongoDB
            try {
                const existingUser = await User.findOneAndUpdate({ id: user.id }, user, { new: true, upsert: true });
                done(null, existingUser);
            } catch (err) {
                done(err, null);
            }
        });
    }
);

passport.use('patreon', PatreonStrategy);

passport.serializeUser((user, done) => {
    console.log('Serializing user:', user);
    done(null, user._id); // Store user ID in session
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        console.log('Deserializing user:', user);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

const router = express.Router();

router.get('/patreon',
    (req, res, next) => {
        console.log('Auth route hit');
        next();
    },
    passport.authenticate('patreon', { scope: ['identity', 'identity.memberships'] }) // Ensure 'identity' and 'identity.memberships' scope is requested
);

router.get('/patreon/callback',
    (req, res, next) => {
        console.log('Callback route hit');
        next();
    },
    passport.authenticate('patreon', { failureRedirect: '/' }),
    function(req, res) {
        console.log('Successful authentication');
        res.redirect('/');
    }
);

router.get('/user', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({
            isAuthenticated: true,
            user: req.user
        });
    } else {
        res.json({
            isAuthenticated: false,
            user: null
        });
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
