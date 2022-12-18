const express = require('express');
const Climber = require('../models/Climber');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('Returning climbers list')
    try {
        const climbers = await Climber.find();
        res.json(climbers);
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    const climber = new Climber({
        id: req.body.id,
        name: req.body.name,
        yearOfBirth: req.body.yearOfBirth,
        country: req.body.country,
        federation: req.body.federation,
    });

    try {
        const savedClimber = await climber.save();
        res.json(savedClimber);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:climberId', async (req, res) => {
    try {
        const climber = await Climber.findById(req.params.id)
        if (climber !== null) {
            res.json(climber)
        } else {
            res.status(404)
        }
        res.send()
    } catch (err) {
        res.json({message: err});
    }
});

router.delete('/:climberId', async (req, res) => {
    try {
        const removeUser = await Climber.remove({id: req.params.climberId});
        res.json(removeUser);
    } catch (err) {
        res.json({message: err});
    }
});

router.patch('/:climberId', async (req, res) => {
    try {
        const updatedUser = await Climber.updateMany(
            {id: req.params.userId},
            {
                $set: {
                    name: req.body.name,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    sex: req.body.sex,
                    img: req.body.img,
                }
            },
        );
        res.json(updatedUser);
    } catch (err) {
        res.json({message: err});
    }
})

module.exports = router;
