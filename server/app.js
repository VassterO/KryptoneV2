// app.js

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const authRoutes = require('./routes/auth');

// Load environment variables
require('dotenv').config();

const app = express();

// MongoDB connection
const mongoURI = "mongodb+srv://kryptoneadmin:TEfWEHt5OB2Smdal@kryptone1.n6hklku.mongodb.net/?retryWrites=true&w=majority&appName=Kryptone1";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Middleware setup
app.use(cors({
    origin: 'https://kryptonefacilities.netlify.app', // Adjust to your client URL
    credentials: true,
}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: mongoURI }), // Use MongoDB for session storage
    cookie: {
        secure: true, // Set to true since using https
        httpOnly: true,
        sameSite: 'none' // Allows cross-site cookie usage
    }
}));
app.use(passport.initialize());
app.use(passport.session());

// Serialize and deserialize user
passport.serializeUser((user, done) => {
    console.log('Serializing user:', user);
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    console.log('Deserializing user:', obj);
    done(null, obj);
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
