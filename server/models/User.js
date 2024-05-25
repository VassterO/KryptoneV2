const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: String,
    memberships: [{
        id: String,
        tier: String
    }]
});

module.exports = mongoose.model('User', userSchema);
