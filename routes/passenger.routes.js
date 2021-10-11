const express = require('express');
const router = express.Router();

const{
    addPassenger,
    getPassengerById,
    deletePassengerById,
    updatePassengerName,
    updateFullPassenger,
    getPassengers
}=require('../controllers/passenger.controller');

const{
    validateAddPassengerRequest,
    isRequestCorrect
}=require('../middlewares/request.middleware');

router.post("/",validateAddPassengerRequest,isRequestCorrect,addPassenger);
router.get('/:id/',getPassengerById);
router.delete('/:id/',deletePassengerById);
router.patch('/:id/',updatePassengerName);
router.put('/:id/',updateFullPassenger);
router.get('/',getPassengers);

module.exports = router;
