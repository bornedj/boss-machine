const express = require('express');
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteAllFromDatabase } = require('./db');
const ideasRouter = require('./ideas');
const meetingsRouter = require('./meetings');
const minionRouter = require('./minions');
const apiRouter = express.Router();

apiRouter.use('/minions', minionRouter)
apiRouter.use('/ideas', ideasRouter)
apiRouter.use('/meetings', meetingsRouter)

module.exports = apiRouter;
