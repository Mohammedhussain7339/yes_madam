// loginRouter.js

const express = require('express');
const loginRouter = express.Router();
const login_controller = require('../controllers/login_controller');

loginRouter.post('/login', login_controller.createLogin);

module.exports = loginRouter;
