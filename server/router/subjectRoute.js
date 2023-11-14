const express = require("express");
const subjectRoute = express.Router();

// CONTROLLER
const SubjectController = require("../controller/SubjectController");

// MIDDLEWARE
const SideboardMiddleware = require("../middleware/SideboardMiddleware");
const AuthMiddleware = require("../middleware/AuthMiddleware");

// INIT
const subjectController = new SubjectController();
const sideboardMiddleware = new SideboardMiddleware();
const authMiddleware = new AuthMiddleware();

// STORAGE
const StorageMiddleware = require("../middleware/StorageMiddleware");

const storageMiddleware = new StorageMiddleware();

// ROUTES: CRUD
subjectRoute.post(
  "/",
  storageMiddleware.storage("subject").single("image"),
  subjectController.create
);
subjectRoute.get(
  "/auth/user",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  subjectController.auth
);
subjectRoute.get("/", subjectController.findAll);
subjectRoute.get("/:subjectID", subjectController.findById);
subjectRoute.put("/:subjectID", subjectController.put);
subjectRoute.delete("/:subjectID", subjectController.delete);
subjectRoute.delete("/delete/all", subjectController.deleteAll);

module.exports = subjectRoute;
