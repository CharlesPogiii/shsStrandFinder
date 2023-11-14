const express = require("express");
const adminRoute = express.Router();

// CONTROLLER
const AdminController = require("../../controller/page/AdminController");

// MIDDLEWARE
const SideboardMiddleware = require("../../middleware/SideboardMiddleware");
const AuthMiddleware = require("../../middleware/AuthMiddleware");

// INIT
const adminController = new AdminController();
const sideboardMiddleware = new SideboardMiddleware();
const authMiddleware = new AuthMiddleware();

// ROUTES: FUNCTIONS
adminRoute.get(
  "/auth",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  adminController.auth
);
adminRoute.get(
  "/auth/access",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  adminController.authAccess
);
adminRoute.patch("/access/:userID", adminController.access);

module.exports = adminRoute;
