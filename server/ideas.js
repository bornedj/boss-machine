const express = require('express');
const ideasRouter = express.Router();
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteAllFromDatabase } = require('./db');
const minionRouter = require('./minions');

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
});

// put idea by id
ideasRouter.put('/:ideaId', (req, res, next) => {
    if (req.idea) {
        const updatedIdea = req.idea;
        updatedIdea.name = req.body.name;
        updatedIdea.description = req.body.description;
        updatedIdea.numWeeks = req.body.numWeeks;
        updatedIdea.weeklyRevenue = req.body.weeklyRevenue;

        const returnIdea = updateInstanceInDatabase('ideas', updatedIdea);
        res.send(returnIdea);
    }
})

module.exports = ideasRouter;