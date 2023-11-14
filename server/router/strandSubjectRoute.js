const express = require("express");
const strandSubjectRoute = express.Router();

// CONTROLLER
const StrandSubjectController = require("../controller/StrandSubjectController");

const strandSubjectController = new StrandSubjectController();

// ROUTES: CRUD
strandSubjectRoute.post("/", strandSubjectController.create);
strandSubjectRoute.get("/", strandSubjectController.findAll);
strandSubjectRoute.get("/:strandSubjectID", strandSubjectController.findById);
strandSubjectRoute.put("/:strandSubjectID", strandSubjectController.put);
strandSubjectRoute.delete("/:strandSubjectID", strandSubjectController.delete);
strandSubjectRoute.delete("/delete/all", strandSubjectController.deleteAll);

module.exports = strandSubjectRoute;
