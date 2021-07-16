const express = require('express');
const { getFromDatabaseById, addToDatabase, createMinion } = require('./db');
const apiRouter = express.Router();
const { getAllFromDatabase } = require('./db');

// working on the minions route 
// params for minion id
apiRouter.param('minionId', (req, res, next, id) => {
    const minion =  getFromDatabaseById('minions', id);
    if (!minion) {
        res.status(404).send('Minion not found');
    }

    req.minion = minion;
    next();
})

//get all
apiRouter.get('/minions', (req, res, next) => {
  res.send(getAllFromDatabase('minions'))
})

//get minion by id
apiRouter.get('/minions/:minionId', (req, res, next) => {
    res.send(req.minion);
})

// create a new minion
apiRouter.post('/minions', (req, res, next) => {
    if (typeof(req.body.name) === 'string' && typeof(req.body.title) === 'string' 
    && typeof(req.body.salary) === 'number') {
        const minionInstance = {
            name: req.body.name,
            title: req.body.title,
            salary: req.body.salary
        }
        const newMinion = addToDatabase('minions', minionInstance)
        return res.status(201).send(newMinion)
    }

    res.status(500).send('error in minion typing')
})

module.exports = apiRouter;
