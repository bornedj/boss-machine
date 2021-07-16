const checkMillionDollarIdea = (req, res, next) => {
    //check if the idea in the body is worth a million dollars
    if (req.body.weeklyRevenue * req.body.numWeeks >= 1000000) {
        next();
    } else {
        return res.status(400).send()
    }
    next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
