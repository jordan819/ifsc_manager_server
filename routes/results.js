const express = require('express');
const LeadResult = require('../models/LeadResult');
const BoulderResult = require('../models/BoulderResult');
const router = express.Router();

router.get('/lead', async (req, res) => {
    console.log("Returning lead results")
    try {
        const leadResults = await LeadResult.find();
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

router.post('/', async (req, res) => {
    const leadResult = new LeadResult({
        id: req.body.id,
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
        const removeResult = await LeadResult.remove({id: req.params.resultId});
        res.json(removeResult);
    } catch (err) {
        res.json({message: err});
    }
});

router.patch('/:resultId', async (req, res) => {
    try {
        const updatedProduct = await LeadResult.updateMany({id: req.params.id}, {
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
