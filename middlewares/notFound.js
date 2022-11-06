const {
    error
} = require('../utils/apiResponse');

const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

module.exports = notFound;