const express = require("express");
const {bright, signup, signin, signout} = require('../controllers/authcontroller');
const { requireSignIn } = require('../middlewares/auth');
const router = express.Router();
const {userSignUpValidator} = require('../middlewares/userValidator')


router.get('/', bright);

router.post('/signup',userSignUpValidator, signup)
router.post('/signin', signin) 
router.get('/signout', signout)

router.get('/hello', requireSignIn, (req, res) => {
    res.send('hello there');
})

module.exports = router;
