const express = require("express");
const dashboardRoute = express.Router();

// CONTROLLER
const DashboardController = require("../../controller/page/DashboardController");

// MIDDLEWARE
const SideboardMiddleware = require("../../middleware/SideboardMiddleware");
const AuthMiddleware = require("../../middleware/AuthMiddleware");

// INIT
const dashboardController = new DashboardController();
const sideboardMiddleware = new SideboardMiddleware();
const authMiddleware = new AuthMiddleware();

// ROUTES: FUNCTIONS
dashboardRoute.get(
  "/",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  dashboardController.readAll
);

module.exports = dashboardRoute;
