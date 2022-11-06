/**
 * @desc - This function is used to send the response to the client
 * 
 * @param {string} - The response message
 * @param {Object | array} results - The response object
 * @param {number} - The response status code
 */

const success = (message, results, time, statCode) => {
    return {
        message,
        error: false,
        code: statCode,
        results,
    }
}


/**
 * desc - Sends respective error response to the client
 * 
 * @param {string} - The error message
 * @param {num} - The error status code
 */
const error = (message, statCode) => {
    const codes = [200, 201, 400, 401, 403, 404, 409, 422, 500]

    const codeFinder = codes.find(code => code === statCode)

    if (!codeFinder){
        statCode = 500
    } else{
        statCode = codeFinder
    }

    return {
        message,
        code: statCode,
        error: true,
        timestamp : new Date()
    }    
}

/**
 * @desc - This function is used to send the validation response to the client
 * 
 * @param {array} errors 
 */
const validation = errors => {
    return {
        message: errors,
        code: 422,
        error: true,
        errors
    }
}

/**
 * Catches any error that is not handled by the application
 * 
 * @param {Function} logger 
 * @param {Response} res 
 * @param {Function} handler 
 * @param {string} err 
 */
const errorCatch = (logger, res, handler, err) => {
    logger.error(err.message)
    res.status(500).json(
        handler('Oops! Something went wrong', res.statCode)
    )
}

module.exports = {
    success,
    error,
    validation,
    errorCatch
}