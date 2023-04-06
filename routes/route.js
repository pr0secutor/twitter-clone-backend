const {Router} = require('express')
const {login,signUp, addTweet} =require('../controller/userController')

const router = Router()

router.get('/healthy',async(req,res) => {
    return(res.status(200).json("App running...."))
})
router.post('/login',login)
router.post('/signup',signUp)
router.post('/addtweet',addTweet)

module.exports=router