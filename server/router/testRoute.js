const express = require("express");
const testRoute = express.Router();

// CONTROLLER
const TestController = require("../controller/TestController");

const testController = new TestController();

// ROUTES
testRoute.get("/", testController.call);

module.exports = testRoute;
