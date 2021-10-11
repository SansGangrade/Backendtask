const express = require('express');
const router = express.Router();

const{
    addAirline,
    getAirlineById,
    getAllAirlines
}=require('../controllers/airline.controller');

const {
    logo
}=require('../middlewares/common.middleware');

const{
    validateAddAirlineRequest,
    isRequestCorrect
}=require('../middlewares/request.middleware');

router.get('/',getAllAirlines);
router.get('/:id/',getAirlineById)
router.post('/',validateAddAirlineRequest,isRequestCorrect,addAirline);

module.exports = router;
