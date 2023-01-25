const mongoose = require('mongoose');

const SpeedResultSchema = mongoose.Schema({
    id: {
        type: String, required: true,
    }, year: {
        type: Number, required: true,
    }, rank: {
        type: Number, required: false,
    }, climber: {
        type: String, required: true,
    }, laneA: {
        type: String, require: false,
    }, laneB: {
        type: String, require: false,
    }, quarter: {
        type: String, require: false,
    }, semiFinal: {
        type: String, require: false,
    }, smallFinal: {
        type: String, require: false,
    }, final: {
        type: String, require: false,
    },
})

module.exports = mongoose.model('SpeedResult', SpeedResultSchema);
