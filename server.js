/**
 * @author: Dave Chuck
 * @email: dchuck@dal.ca
 */

require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors');
const respTime = require('response-time')
const rateLimit = require('./middlewares/limit')
const logger = require('./utils/logger')
const app = express()

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.set('trust proxy', 1)

app.use(respTime())
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(rateLimit)

app.use('/api', require('.routes/express.route'))

app.use(require('./middlewares/notFound'))

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    logger.info(`Server is running on port ${port} with process id ${process.pid}`)
})

process.on('SIGINT', () => {
    logger.info('SIGINT signal received: closing HTTP server')
    server.close(() => {
        logger.info('HTTP server closed')
        process.exit(0)
    })
})

process.on('SIGTERM', () => {
    logger.info('SIGTERM signal received: Server is closed')
    server.close(() => {
        logger.info('HTTP server closed')
        process.exit(0)
    })
})

module.exports = app
