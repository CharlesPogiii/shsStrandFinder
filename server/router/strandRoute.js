const express = require("express");
const strandRoute = express.Router();

// CONTROLLER
const StrandController = require("../controller/StrandController");

// STORAGE
const StorageMiddleware = require("../middleware/StorageMiddleware");

// MIDDLEWARE
const SideboardMiddleware = require("../middleware/SideboardMiddleware");
const AuthMiddleware = require("../middleware/AuthMiddleware");

// INIT
const strandController = new StrandController();
const storageMiddleware = new StorageMiddleware();
const sideboardMiddleware = new SideboardMiddleware();
const authMiddleware = new AuthMiddleware();

// ROUTES: CRUD
strandRoute.post(
  "/",
  storageMiddleware.storage("strand").single("image"),
  strandController.create
);
strandRoute.get(
  "/auth/user",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  strandController.auth
);
strandRoute.get("/", strandController.findAll);
strandRoute.get("/:strandID", strandController.findById);
strandRoute.put("/:strandID", strandController.put);
strandRoute.delete("/:strandID", strandController.delete);
strandRoute.delete("/delete/all", strandController.deleteAll);

module.exports = strandRoute;
