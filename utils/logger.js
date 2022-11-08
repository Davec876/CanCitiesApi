const logger = require('signale')

// function to log the errors
logger.config({
    displayTimestamp: true,
    displayFilename: false,
    displayBadge: false,
    displayDate: false
})

module.exports = logger