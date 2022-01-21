const ControllerUser = require('../controllers/controllerUser')
const { authentication } = require('../middleware/auth')

const router = require('express').Router()

router.post('/register', ControllerUser.register)
router.post('/login', ControllerUser.login)
router.use(authentication)
router.get('/user', ControllerUser.findAllUser)
router.get('/friends', ControllerUser.showFriends)
router.post('/friends/:friendId', ControllerUser.addFriends)
router.get('/favorite', ControllerUser.getfavoriteSong)
router.post('/favorite', ControllerUser.addfavoriteSong)
router.get('/playlist', ControllerUser.getplaylistSong)
router.post('/playlist', ControllerUser.addplaylistSong)

module.exports = router