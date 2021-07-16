const express = require('express');
const { getFromDatabaseById } = require('./db');
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

module.exports = apiRouter;
