const express = require('express');
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteAllFromDatabase } = require('./db');
const ideasRouter = require('./ideas');
const minionRouter = require('./minions');
const apiRouter = express.Router();

apiRouter.use('/minions', minionRouter)
apiRouter.use('/ideas', ideasRouter)

module.exports = apiRouter;
