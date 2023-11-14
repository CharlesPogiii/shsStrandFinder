const express = require("express");
const forgotRoute = express.Router();

// CONTROLLER
const ForgotController = require("../../controller/page/ForgotController");

const forgotController = new ForgotController();

// ROUTES: FUNCTIONS
forgotRoute.put("/", forgotController.update);

module.exports = forgotRoute;
