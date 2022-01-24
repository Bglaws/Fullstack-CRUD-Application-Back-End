const databases = require('../models');
const {Campus, Student} = databases; // destructuring files from the sequelize databases
const router = require('express').Router()


router.get('/', async (req, res, next) => {
    try {
        const campuses = await Campus.findAll();
        res.status(200).json(campuses);
    } catch (error) {
        res.status(404).json({error : error})
    }
})

router.get('/:campusID', (req, res, next) => {
    try {
        const campus = await Campus.findByPk(req.params.CampusID);
        res.status(200).json(campus);
    } catch (error) {
        res.status(404).json({error : error})
    }
})

router.post('/', async (req, res, next) => {
    try {
        const campus = await Campus.create(req.body);
        res.status(201).json(campus);
    } catch (error) {
        res.status(404).json({error : error});
    }
});

router.put('/:campusID', (req, res, next) => {
    try {
        const updated = await Campus.update(req.body, {
            // code to update specific campus
        }) 
    } catch (error) {
        // error message
    }
});

