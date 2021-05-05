const express = require('express');
const { requireSignIn } = require('../middlewares/auth');
const { userById } = require('../middlewares/user');
const requiredRole = require('../middlewares/checkRole');
const { Exemple } = require('../controllers/testController');

const router = express.Router();

router.post('/test', requireSignIn, userById, requiredRole('Admin'), Exemple);

module.exports = router;
