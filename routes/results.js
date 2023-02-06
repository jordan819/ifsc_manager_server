const express = require('express');
const LeadResult = require('../models/LeadResult');
const BoulderResult = require('../models/BoulderResult');
const SpeedResult = require('../models/SpeedResult');
const router = express.Router();

router.get('/lead', async (req, res) => {
    console.log("Returning lead results")
    try {
        const leadResults = await LeadResult.find();
        console.log(leadResults)
        res.json(leadResults);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/boulder', async (req, res) => {
    console.log("Returning boulder results")
    try {
        const leadResults = await BoulderResult.find();
        res.json(leadResults);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/speed', async (req, res) => {
    console.log("Returning speed results")
    try {
        const speedResults = await SpeedResult.find();
        console.log(speedResults)
        res.json(speedResults);
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/lead', async (req, res) => {
    const leadResult = new LeadResult({
        year: req.body.year,
        competitionId: req.body.competitionId,
        rank: req.body.rank,
        climber: req.body.climber,
        qualification: req.body.qualification,
        semiFinal: req.body.semiFinal,
        final: req.body.final,
    });

    try {
        const savedLeadResults = await leadResult.save();
        res.json(savedLeadResults);
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/boulder', async (req, res) => {
    const boulderResult = new BoulderResult({
        year: req.body.year,
        competitionId: req.body.competitionId,
        rank: req.body.rank,
        climber: req.body.climber,
        qualification: req.body.qualification,
        semiFinal: req.body.semiFinal,
        final: req.body.final,
    });

    try {
        const savedBoulderResult = await boulderResult.save();
        res.json(savedBoulderResult);
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/speed', async (req, res) => {
    const speedResult = new SpeedResult({
        year: req.body.year,
        competitionId: req.body.competitionId,
        rank: req.body.rank,
        climber: req.body.climber,
        laneA: req.body.laneA,
        laneB: req.body.laneB,
        quarter: req.body.quarter,
        semiFinal: req.body.semiFinal,
        smallFinal: req.body.smallFinal,
        final: req.body.final,
    });

    try {
        const savedSpeedResult = await speedResult.save();
        res.json(savedSpeedResult);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:resultId', async (req, res) => {
    try {
        const result = await LeadResult.findById(req.params.resultId)
        res.json(result)
    } catch (err) {
        res.json({message: err});
    }
});

router.delete('/:resultId', async (req, res) => {
    try {
        const removeResult = await SpeedResult.findByIdAndDelete(req.params.resultId);
        res.json(removeResult);
    } catch (err) {
        res.json({message: err});
    }
});

router.patch('/:resultId', async (req, res) => {
    try {
        const updatedProduct = await LeadResult.findByIdAndUpdate(req.params.resultId, {
            $set: {
                year: req.body.year,
                competitionId: req.body.competitionId,
                rank: req.body.rank,
                climber: req.body.climber,
                qualification: req.body.qualification,
                semiFinal: req.body.semiFinal,
                final: req.body.final,
            }
        },);
        res.json(updatedProduct);
    } catch (err) {
        res.json({message: err});
    }
})

module.exports = router;
