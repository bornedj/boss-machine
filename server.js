const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

module.exports = app;
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
app.use(cors());

// Add middware for parsing request bodies here:
app.use(bodyParser.json())

// logger
// app.use(morgan('dev'))

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);

//displaying home page
app.use(express.static('public'))


// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
  })
}
