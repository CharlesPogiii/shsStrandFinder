const express = require("express");
const peRoute = express.Router();

// CONTROLLER
const PEController = require("../controller/PEController");

// MIDDLEWARE
const SideboardMiddleware = require("../middleware/SideboardMiddleware");
const AuthMiddleware = require("../middleware/AuthMiddleware");

// INIT
const peController = new PEController();
const sideboardMiddleware = new SideboardMiddleware();
const authMiddleware = new AuthMiddleware();

// ROUTES: CRUD
peRoute.post("/", peController.create);
peRoute.get(
  "/auth/user",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  peController.auth
);
peRoute.get("/", peController.findAll);
peRoute.get("/:peID", peController.findById);
peRoute.get(
  "/nav/assess",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  peController.findByIdNav
);
peRoute.put("/:peID", peController.put);
peRoute.delete("/:peID", peController.delete);
peRoute.delete("/delete/all", peController.deleteAll);

module.exports = peRoute;
