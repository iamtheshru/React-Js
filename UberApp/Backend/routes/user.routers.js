const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controllers');




router.post('/register', [
    body('email').isEmail().withMessage('email is required'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('frist name must be at least 3 character'),
    body('password').isLength({ min: 36 }).withMessage('Password must be at least 6 character'),
],
    userController.registerUser)

module.exports = router;