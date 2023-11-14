const express = require("express");
const questionRoute = express.Router();

// CONTROLLER
const QuestionController = require("../controller/QuestionController");

// STORAGE
const StorageMiddleware = require("../middleware/StorageMiddleware");
const SideboardMiddleware = require("../middleware/SideboardMiddleware");
const AuthMiddleware = require("../middleware/AuthMiddleware");

// INIT
const questionController = new QuestionController();
const storageMiddleware = new StorageMiddleware();
const sideboardMiddleware = new SideboardMiddleware();
const authMiddleware = new AuthMiddleware();

// ROUTES: CRUD
questionRoute.post(
  "/",
  storageMiddleware.storage("question").single("questionImage"),
  questionController.create
);
questionRoute.get(
  "/auth/user",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  questionController.auth
);
questionRoute.get("/", questionController.findAll);
questionRoute.get("/:questionID", questionController.findById);
questionRoute.put("/:questionID", questionController.put);
questionRoute.delete("/:questionID", questionController.delete);
questionRoute.delete("/delete/all", questionController.deleteAll);

module.exports = questionRoute;
