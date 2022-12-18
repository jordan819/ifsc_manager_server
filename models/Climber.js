const mongoose = require('mongoose');

const ClimberSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    yearOfBirth: {
        type: Number,
        required: false,
    },
    country: {
        type: String,
        required: true,
    },
    federation: {
        type: String,
        require: true,
    },
})

module.exports = mongoose.model('Climber', ClimberSchema);
