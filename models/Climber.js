const mongoose = require('mongoose');

const ClimberSchema = mongoose.Schema({
    name: {
        type: String, required: true,
    }, image: {
        type: String, required: false, default: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
    }, yearOfBirth: {
        type: Number, required: false,
    }, country: {
        type: String, required: true,
    }, federation: {
        type: String, require: true,
    },
})

module.exports = mongoose.model('Climber', ClimberSchema);
