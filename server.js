/**
 * @author: Dave Chuck
 * @email: dchuck@dal.ca
 */

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const respTime = require('response-time');
const rateLimit = require('express-rate-limit');