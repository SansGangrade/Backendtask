const {
    check,
    validationResult
}=require('express-validator');

validateAddAirlineRequest = [
    check('name').notEmpty().withMessage("Airline name is required"),
    check('id').notEmpty().withMessage("Id is required"),
    check('country').notEmpty().withMessage("Country is required"),
    check('head_quarters').notEmpty().withMessage("Head Quarters is required"),
    check('website').notEmpty().withMessage("Website is required"),
    check('established').notEmpty().withMessage("Year of establishment is required"),
]

validateAddPassengerRequest = [
    check('name').notEmpty().withMessage("Name is required"),
    check('trips').notEmpty().withMessage("No. of trips are required"),
    check('airline').notEmpty().withMessage("Airline is required"),
]

const isRequestCorrect = (req,res,next)=>{
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(500).json({
            success : false,
            message : "Invalid Request",
            error : errors.array()[0].msg
        })
    }
    next();
}

module.exports = {
    validateAddAirlineRequest,
    validateAddPassengerRequest,
    isRequestCorrect
}
