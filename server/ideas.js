const express = require('express');
const ideasRouter = express.Router();
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteAllFromDatabase } = require('./db');

// params 
ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (!idea) {
        res.status(404).send('No idea with that id')
    }

    req.idea = idea;
    next();
})

// get all ideas
ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'))
})

// get idea by idea
ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea)
})

// post new idea
ideasRouter.post('/', (req, res, next) => {
    //validate body data
    if (typeof(req.body.name) === 'string' && typeof(req.body.description) === 'string' 
    && typeof(req.body.numWeeks) === 'number' && typeof(req.body.weeklyRevenue) === 'number')
    {
        const ideaInstance = {
            name: req.body.name,
            description: req.body.description,
            numWeeks: req.body.numWeeks,
            weeklyRevenue: req.body.weeklyRevenue 
        }
        const newIdea = addToDatabase('ideas', ideaInstance)
        return res.status(201).send(newIdea)
    }
    res.status(500).send('error in idea typing')
})

module.exports = ideasRouter;