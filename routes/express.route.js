const router = require('express').Router();

//calling the controllers 
const {
    alive,
    getAllCities,
    getAllProvinesByCityId
} = require('../controllers/express.controller');

router.get('/alive', alive);

router.get('/cities', getAllCities);

router.get('/provinces/:cityId', getAllProvinesByCityId);

module.exports = router;