const express = require("express");
const resetForgot = express.Router();

// CONTROLLER
const ResetController = require("../../controller/page/ResetController");

// MIDDLEWARE
const SideboardMiddleware = require("../../middleware/SideboardMiddleware");
const AuthMiddleware = require("../../middleware/AuthMiddleware");

// INIT
const resetController = new ResetController();
const sideboardMiddleware = new SideboardMiddleware();
const authMiddleware = new AuthMiddleware();

// ROUTES: FUNCTIONS
resetForgot.get(
  "/auth",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  resetController.auth
);
resetForgot.put("/", resetController.reset);

module.exports = resetForgot;
