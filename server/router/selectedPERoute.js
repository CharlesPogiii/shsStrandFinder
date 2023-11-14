const express = require("express");
const selectedPERoute = express.Router();

// CONTROLLER
const SelectedPEController = require("../controller/SelectedPEController");

const selectedPEController = new SelectedPEController();

// ROUTES: CRUD
selectedPERoute.post("/", selectedPEController.create);
selectedPERoute.get("/", selectedPEController.findAll);
selectedPERoute.get("/:selectedPEID", selectedPEController.findById);
selectedPERoute.get("/user/:userID", selectedPEController.findByUserID);
selectedPERoute.put("/:selectedPEID", selectedPEController.put);
selectedPERoute.delete("/:selectedPEID", selectedPEController.delete);
selectedPERoute.delete("/delete/all", selectedPEController.deleteAll);

module.exports = selectedPERoute;
