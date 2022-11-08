const rateLimit = require('express-rate-limit');

// function to limit the number of requests
module.exports = rateLimit({
    windowMs: 3 * 60 * 1000, // 3 mins
    max: 100, // limit each IP to 100 requests per windowMs
    message: {
		status: 429,
		response: 'Too many requests from this IP, please try again later'
	}
})