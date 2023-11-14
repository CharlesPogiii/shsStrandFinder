const express = require("express");
const resultRoute = express.Router();

// CONTROLLER
const ResultController = require("../../controller/page/ResultController");

// MIDDLEWARE
const SideboardMiddleware = require("../../middleware/SideboardMiddleware");
const AuthMiddleware = require("../../middleware/AuthMiddleware");

// INIT
const resultController = new ResultController();
const sideboardMiddleware = new SideboardMiddleware();
const authMiddleware = new AuthMiddleware();

// ROUTES: FUNCTIONS
resultRoute.get(
  "/",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  resultController.resultByUserId
);

module.exports = resultRoute;
