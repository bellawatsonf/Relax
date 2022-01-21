var jwt = require('jsonwebtoken');
const {User} = require('../models')

const authentication= (req,res, next) =>{
    if(!req.headers.access_token){
        res.status(404).json({message: "please login first"})
    }
    try{
        var decode = jwt.verify(req.headers.access_token, process.env.SECRET_KEY)
        req.userId = decode.id
        User.findOne({where:{id : req.userId}})
        .then(data =>{
            if(data) next()
            else throw err
        })
    }
    catch(err){
        res.status(404).json({message: "not authenticated"})
    }
}

module.exports = {authentication}