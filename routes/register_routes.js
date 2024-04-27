const express = require('express');
const registerRouter = express.Router();
const register_controller= require('../controllers/register');


registerRouter.post('/register' , register_controller.createRegister);

module.exports =  registerRouter;

