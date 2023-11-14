const express = require("express");
const registerRoute = express.Router();

// CONTROLLER
const RegisterController = require("../../controller/page/RegisterController");

const registerController = new RegisterController();

// ROUTES: FUNCTIONS
registerRoute.post("/", registerController.register);

module.exports = registerRoute;
