const express = require("express");
const userRoute = express.Router();

// CONTROLLER
const UserController = require("../controller/UserController");

const userController = new UserController();

// ROUTES: CRUD
userRoute.post("/", userController.create);
userRoute.get("/", userController.findAll);
userRoute.get("/:userID", userController.findById);
userRoute.put("/:userID", userController.put);
userRoute.delete("/:userID", userController.delete);
userRoute.delete("/delete/all", userController.deleteAll);

module.exports = userRoute;
