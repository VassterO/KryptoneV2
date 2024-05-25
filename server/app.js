// app.js

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require('./routes/auth');

// Load environment variables
require('dotenv').config();

const app = express();

// Middleware setup
app.use(cors({
    origin: 'https://kryptonefacilities.netlify.app', // Adjust to your client URL
    credentials: true,
}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true, // Set to true since using https
        httpOnly: true,
        sameSite: 'none' // Allows cross-site cookie usage
    }
}));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Serialize and deserialize user
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

// Use the auth routes
app.use('/auth', authRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
