const express = require("express");
const strandTypeRoute = express.Router();

// CONTROLLER
const StrandTypeController = require("../controller/StrandTypeController");

// MIDDLEWARE
const SideboardMiddleware = require("../middleware/SideboardMiddleware");
const AuthMiddleware = require("../middleware/AuthMiddleware");

// INIT
const strandTypeController = new StrandTypeController();
const sideboardMiddleware = new SideboardMiddleware();
const authMiddleware = new AuthMiddleware();

// ROUTES: CRUD
strandTypeRoute.post("/", strandTypeController.create);
strandTypeRoute.get(
  "/auth/user",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  strandTypeController.auth
);
strandTypeRoute.get("/", strandTypeController.findAll);
strandTypeRoute.get("/:strandTypeID", strandTypeController.findById);
strandTypeRoute.put("/:strandTypeID", strandTypeController.put);
strandTypeRoute.delete("/:strandTypeID", strandTypeController.delete);
strandTypeRoute.delete("/delete/all", strandTypeController.deleteAll);

module.exports = strandTypeRoute;
