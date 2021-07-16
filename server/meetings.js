const meetingsRouter = require('express').Router();
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, createMeeting } = require('./db');

// get all
meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
})

// post new meeting
meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = createMeeting();
    addToDatabase('meetings', newMeeting);
    res.status(201).send(newMeeting);
})

module.exports = meetingsRouter;