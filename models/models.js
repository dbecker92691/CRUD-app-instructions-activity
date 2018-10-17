const mongoose = require('mongoose');

const whateverSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Whatever', whateverSchema);