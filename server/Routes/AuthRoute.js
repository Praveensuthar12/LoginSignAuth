
const express = require('express')
const router = express.Router();

const { login, signup } = require('../Controllers/UserContoller');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');


router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;