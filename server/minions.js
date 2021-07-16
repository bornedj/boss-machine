const express = require('express');
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');
const minionRouter = express.Router();

minionRouter.param('minionId', (req, res, next, id) => {
    const minion =  getFromDatabaseById('minions', id);
    if (!minion) {
        res.status(404).send('Minion not found');
    }

    req.minion = minion;
    next();
})

//get all
minionRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('minions'))
})

//get minion by id
minionRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
})

// create a new minion
minionRouter.post('/', (req, res, next) => {
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

// updating a minion by id
minionRouter.put('/:minionId', (req, res, next) => {
    if (req.minion) {
        const updatedMinion = req.minion;
        updatedMinion.name = req.body.name;
        updatedMinion.title = req.body.title;
        updatedMinion.salary = req.body.salary;

        const returnMinion = updateInstanceInDatabase('minions', updatedMinion);
        res.send(returnMinion);
    }
})

// deleting a minion
minionRouter.delete('/:minionId', (req, res, next) => {
    if (req.minion) {
        deleteFromDatabasebyId('minions', req.minion.id);
        res.status(204).send('minion deleted')
    }
})

module.exports = minionRouter;