const meetingsRouter = require('express').Router();
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, createMeeting, deleteAllFromDatabase } = require('./db');

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

// delete all from the database
meetingsRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send('all meetings have been delted')
})

module.exports = meetingsRouter;