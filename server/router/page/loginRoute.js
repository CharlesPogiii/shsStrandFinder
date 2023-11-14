const express = require("express");
const loginRoute = express.Router();

// CONTROLLER
const LoginController = require("../../controller/page/LoginController");

const loginController = new LoginController();

// ROUTES: FUNCTIONS
loginRoute.get("/success", loginController.success);
loginRoute.get("/failure", loginController.failure);

module.exports = loginRoute;
