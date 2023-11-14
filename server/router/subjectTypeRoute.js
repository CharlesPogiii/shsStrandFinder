const express = require("express");
const subjectTypeRoute = express.Router();

// CONTROLLER
const SubjectTypeController = require("../controller/SubjectTypeController");

// MIDDLEWARE
const SideboardMiddleware = require("../middleware/SideboardMiddleware");
const AuthMiddleware = require("../middleware/AuthMiddleware");

// INIT
const subjectTypeController = new SubjectTypeController();
const sideboardMiddleware = new SideboardMiddleware();
const authMiddleware = new AuthMiddleware();

// ROUTES: CRUD
subjectTypeRoute.post("/", subjectTypeController.create);
subjectTypeRoute.get(
  "/auth/user",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  subjectTypeController.auth
);
subjectTypeRoute.get("/", subjectTypeController.findAll);
subjectTypeRoute.get("/:subjectTypeID", subjectTypeController.findById);
subjectTypeRoute.put("/:subjectTypeID", subjectTypeController.put);
subjectTypeRoute.delete("/:subjectTypeID", subjectTypeController.delete);
subjectTypeRoute.delete("/delete/all", subjectTypeController.deleteAll);

module.exports = subjectTypeRoute;
