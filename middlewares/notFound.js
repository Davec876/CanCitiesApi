const {
    error
} = require('../utils/apiResponse');
//function for not found errors
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

module.exports = notFound;