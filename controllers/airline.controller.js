const airlineModel = require('../models/ariline.model');

const getAllAirlines = (req,res)=>{

    airlineModel.find({}).exec((error,data)=>{
        if(error)
        {
            return res.status(500).json({
                success : false,
                error : "DB error occured contact your administrator" 
            })
        }
        if(data)
        {
            return res.json({
                success: true,
                message: "All Airlines Found Successfully",
                data: data
            })
        }
    })
}

const getAirlineById = (req,res)=>{

    const{
        id
    }=req.params;
    
    airlineModel.find({
        "id" : id
    }).exec((error,data)=>{
        if(error)
        {
            return res.status(500).json({
                success : false,
                error : "DB error occured contact your administrator" 
            })
        }
        if(data)
        {
            return res.json({
                success: true,
                message: "Airline Found Successfully",
                data: data
            })
        }
    })
}

const addAirline = (req,res)=>{

    const {
        id,
        name,
        country,
        logo,
        slogan,
        head_quarters,
        website,
        established
    }=req.body;

    const _airline = new airlineModel({
        id,
        name,
        country,
        logo,
        slogan,
        head_quarters,
        website,
        established
    })

    _airline.save((error,data)=>{
        
        if(error)
            {
                console.log(error);

                return res.status(500).json({
                    success : false,
                    message : "DB Error occurred. Contact your administrator",
                    error : error
                })
            }

            if(data){
                return res.status(201).json({
                    success : true,
                    message : "Airline Successfully Saved",
                    data : data
                })
            }
    })
}

module.exports = {
    addAirline,
    getAirlineById,
    getAllAirlines
}
