const mongoose = require('mongoose');

const BoulderResultSchema = mongoose.Schema({
    year: {
        type: Number, required: true,
    }, competitionId: {
        type: String, required: true,
    }, rank: {
        type: Number, required: false,
    }, climber: {
        type: String, required: true,
    }, qualification: {
        type: String, require: true,
    }, semiFinal: {
        type: String, require: false,
    }, final: {
        type: String, require: false,
    },
})

module.exports = mongoose.model('BoulderResult', BoulderResultSchema);
