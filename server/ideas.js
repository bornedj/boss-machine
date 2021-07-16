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

module.exports = ideasRouter;