const express = require("express");
const viewableRoute = express.Router();

// CONTROLLER
const ViewableController = require("../controller/ViewableController");

// MIDDLEWARE
const SideboardMiddleware = require("../middleware/SideboardMiddleware");
const AuthMiddleware = require("../middleware/AuthMiddleware");

// INIT
const viewableController = new ViewableController();
const sideboardMiddleware = new SideboardMiddleware();
const authMiddleware = new AuthMiddleware();

// ROUTES: FUNCTIONS
viewableRoute.get(
  "/personal-engagement",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  viewableController.viewPE
);
viewableRoute.get(
  "/subject",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  viewableController.viewSubject
);

module.exports = viewableRoute;
