const logger = require('signale')

logger.config({
    displayTimestamp: true,
    displayFilename: false,
    displayBadge: false,
    displayDate: false
})

module.exports = logger