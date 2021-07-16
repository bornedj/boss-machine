const express = require('express');
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteAllFromDatabase } = require('./db');
const minionRouter = require('./minions');
const apiRouter = express.Router();

apiRouter.use('/minions', minionRouter)
// working on the minions route 
// params for minion id
// apiRouter.param('minionId', (req, res, next, id) => {
//     const minion =  getFromDatabaseById('minions', id);
//     if (!minion) {
//         res.status(404).send('Minion not found');
//     }

//     req.minion = minion;
//     next();
// })

// //get all
// apiRouter.get('/minions', (req, res, next) => {
//   res.send(getAllFromDatabase('minions'))
// })

// //get minion by id
// apiRouter.get('/minions/:minionId', (req, res, next) => {
//     res.send(req.minion);
// })

// // create a new minion
// apiRouter.post('/minions', (req, res, next) => {
//     if (typeof(req.body.name) === 'string' && typeof(req.body.title) === 'string' 
//     && typeof(req.body.salary) === 'number') {
//         const minionInstance = {
//             name: req.body.name,
//             title: req.body.title,
//             salary: req.body.salary
//         }
//         const newMinion = addToDatabase('minions', minionInstance)
//         return res.status(201).send(newMinion)
//     }

//     res.status(500).send('error in minion typing')
// })

// // updating a minion by id
// apiRouter.put('/minions/:minionId', (req, res, next) => {
//     if (req.minion) {
//         const updatedMinion = req.minion;
//         updatedMinion.name = req.body.name;
//         updatedMinion.title = req.body.title;
//         updatedMinion.salary = req.body.salary;

//         const returnMinion = updateInstanceInDatabase('minions', updatedMinion);
//         res.send(returnMinion);
//     }
// })

// // deleting a minion
// apiRouter.delete('/minions/:minionId', (req, res, next) => {
//     if (req.minion) {
//         deleteAllFromDatabase('minions', req.minion.id);
//         res.status(204).send('minion deleted')
//     }
// })

module.exports = apiRouter;
