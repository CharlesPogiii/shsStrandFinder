const express = require("express");
const selectedStrandRoute = express.Router();

// CONTROLLER
const SelectedStrandController = require("../controller/SelectedStrandController");

const selectedStrandController = new SelectedStrandController();

// ROUTES: CRUD
selectedStrandRoute.post("/", selectedStrandController.create);
selectedStrandRoute.post(
  "/user/:userID",
  selectedStrandController.createByUserID
);
selectedStrandRoute.get("/", selectedStrandController.findAll);
selectedStrandRoute.get(
  "/:selectedStrandID",
  selectedStrandController.findById
);
selectedStrandRoute.put("/:selectedStrandID", selectedStrandController.put);
selectedStrandRoute.delete(
  "/:selectedStrandID",
  selectedStrandController.delete
);
selectedStrandRoute.delete("/delete/all", selectedStrandController.deleteAll);

module.exports = selectedStrandRoute;
