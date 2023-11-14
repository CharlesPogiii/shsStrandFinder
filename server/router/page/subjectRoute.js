const express = require("express");
const subjectPRoute = express.Router();

// CONTROLLER
const SubjectController = require("../../controller/page/SubjectController");

// MIDDLEWARE
const SideboardMiddleware = require("../../middleware/SideboardMiddleware");
const AuthMiddleware = require("../../middleware/AuthMiddleware");

// INIT
const subjectController = new SubjectController();
const sideboardMiddleware = new SideboardMiddleware();
const authMiddleware = new AuthMiddleware();

// ROUTES: FUNCTIONS
subjectPRoute.get(
  "/",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  subjectController.readAll
);
subjectPRoute.get(
  "/:subjectID",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  subjectController.findByIdAssessment
);

module.exports = subjectPRoute;
