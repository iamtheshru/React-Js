const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controllers');




router.post('/register', [
    body('email').isEmail().withMessage('email is required'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('frist name must be at least 3 character'),
    body('password').isLength({ min: 6, max: 36 }).withMessage('Password must be between 6 to 36 characters')
],
    userController.registerUser)

module.exports = router;