const router = require('express').Router();

const {
    alive,
    getAllCities,
    getAllProvinesByCityId
} = require('../controllers/express.controller');

router.get('/alive', alive);

router.get('/cities', getAllCities);

router.get('/provinces/:cityId', getAllProvinesByCityId);

module.exports = router;