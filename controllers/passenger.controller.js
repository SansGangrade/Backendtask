const {nanoid}=require('nanoid');
const passengerModel = require('../models/passenger.model');
const airlineModel = require('../models/ariline.model');

const addPassenger = (req,res)=>{
    const {
        name,
        trips,
        airline
    }=req.body

    airlineModel.find({
        id : airline
    }).exec((error,airl)=>{
        if(error)
        {
            console.log(error);
            return res.status(500).json({
                success : false,
                error : "DB error occured contact your administrator" 
            })
        }
        if(airl)
        {
            const _passenger = new passengerModel({
                id : nanoid(25),
                name,
                trips,
                airline 
            })

            _passenger.save((error2,data)=>{
                if(error2)
                {
                    console.log(error2);
                    return res.status(500).json({
                        success : false,
                        error : "DB error occured contact your administrator" 
                    })
                }
                if(data)
                {
                    data.airline = airl
                    return res.status(201).json({
                        success : true,
                        message : "Passenger Successfully Saved",
                        data : data
                    })
                }
            })
        }
    })
    
}

const getPassengerById = (req,res)=>{
    const {
        id
    }=req.params;

    passengerModel.findOne({
        id : id
    }).exec((error,data)=>{
        if(error)
        {
            console.log(error);
            return res.status(500).json({
                success : false,
                error : "DB error occured contact your administrator" 
            })
        }
        if(data)
        {
            airlineModel.find({
                id : data.airline
            }).exec((error,airl)=>{
                if(error)
                {
                    console.log(error);
                    return res.status(500).json({
                        success : false,
                        error : "DB error occured contact your administrator" 
                    })
                }
                if(airl)
                {
                    data.airline = airl
                    return res.status(201).json({
                        success : true,
                        message : "Passenger Found Successfully",
                        data : data
                    })
                }
            })
        }
    })
}

const deletePassengerById = (req,res)=>{
    const{
        id
    }=req.params;

    passengerModel.deleteOne({
        id : id
    }).exec((error,data)=>{
        if(error)
        {
            console.log(error);
            return res.status(500).json({
                success : false,
                error : "DB error occured contact your administrator" 
            })
        }
        if(data)
        {
            return res.status(201).json({
                message : "Passenger data Deleted Successfully",
            })
        }
    })
}
const updatePassengerName = (req,res)=>{

    const {
        id
    }=req.params;

    const{
        name
    }=req.body;

    passengerModel.findOneAndUpdate({
        id : id
    },{
        name : name
    }).exec((error,data)=>{
        if(error)
        {
            console.log(error);
            return res.status(500).json({
                success : false,
                error : "DB error occured contact your administrator" 
            })
        }
        if(data)
        {
            return res.status(201).json({
                success : true,
                message : "Passenger name Updated Successfully",
            })
        }
    })
}

const updateFullPassenger = (req,res)=>{
    const {
        id
    }=req.params;

    const{
        name,
        trips,
        airline
    }=req.body;

    passengerModel.findOneAndUpdate({
        id : id
    },{
        name : name,
        trips : trips,
        airline : airline
    },{
        new : true
    }).exec((error,data)=>{
        if(error)
        {
            console.log(error);
            return res.status(500).json({
                success : false,
                error : "DB error occured contact your administrator" 
            })
        }
        if(data)
        {
            return res.status(201).json({
                success : true,
                message : "Passenger Updated Successfully",
                data : data
            })
        }
    })
}

const getPassengers = async(req,res)=>{
    const{
        page,
        size
    }=req.query;

    try {
        const users = await passengerModel.find({});
        
        const startIndex = (page-1)*size;
        const lastIndex = page*size;
        const data=users.slice(startIndex,lastIndex)
        if(data)
        {
            return res.status(201).json({
                success : true,
                message : "Passengers Found Successfully",
                data : data
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            error : "DB error occured contact your administrator" 
        })
    }
}

module.exports = {
    addPassenger,
    getPassengerById,
    deletePassengerById,
    updatePassengerName,
    updateFullPassenger,
    getPassengers
}
