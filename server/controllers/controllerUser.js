const { decrypt } = require('../helpers/bcrypt')
const {User,Friend,Favorite,Playlist} = require('../models/index.js')
var jwt = require('jsonwebtoken');
const { Op } = require("sequelize");

class ControllerUser {
    static register(req,res){
        let input = {
            username : req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        User.create(input)
        .then(data =>{
            res.status(201).json({
                message: "register success",
                username: data.username,
                email: data.email
            })
        })
        .catch(err => {
            res.status(500).json(data)
        })
    }

    static login(req,res){
        const {email, password} = req.body

        User.findOne({where:{email}})
        .then(data =>{
            const checkHashedPassword = decrypt(password, data.password)
            if(data === null ){
                throw err
            }
            if(data && checkHashedPassword){
                const access_token = jwt.sign({id:data.id, email:data.email, username:data.username}, process.env.SECRET_KEY)
                res.status(200).json({username: data.username,access_token})
            }
        })
        .catch(err => {
            res.status(500).json(data)
        })
    }

    static addFriends(req,res){
        let input = {
            UserId : req.userId,
            FriendId : req.params.friendId
        }
        Friend.create(input)
        .then(data =>{
            res.status(201).json({
                message: "add friend succes"
            })
        })
        .catch(err => console.log(err))
    }

    static showFriends(req,res){
        Friend.findAll({include:[{
            model: User,
            as: 'Friends'
        },{
            model: User,
            as: 'User'
        }],where:{UserId: req.userId}})
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(data)
        })
    }

    static getfavoriteSong(req,res){
        Favorite.findAll({include:[User],where:{UserId: req.userId}})
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(data)
        })
    }

    static addfavoriteSong(req,res){
        let input = {
            UserId : req.userId,
            title: req.body.title,
            preview : req.body.preview,
            picture: req.body.picture,
            ArtistId: req.body.ArtistId
        }
        Favorite.create(input)
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err => console.log(err))
    }

    static getplaylistSong(req,res){
        console.log('masuk')
        Playlist.findAll({include:[User],where:{UserId: req.userId}})
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(data)
        })
    }

    static addplaylistSong(req,res){
        let input = {
            UserId : req.userId,
            title: req.body.title,
            preview : req.body.preview,
            picture: req.body.picture,
            ArtistId: req.body.ArtistId
        }
        Playlist.create(input)
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(data)
        })
    }

    static findAllUser (req,res) {
        const username = req.query.username
        // let opt ={ where:{[Op.iLike] : `%${username}%`}}
        // if (username){
        //     opt.where.username =  {[Op.iLike] : `%${username}%`}
        // }
        User.findAll({
            where: {
              username: {
                [Op.iLike]: `%${username}%`
              }
            }
          })
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(data)
        })
    }
}

module.exports = ControllerUser