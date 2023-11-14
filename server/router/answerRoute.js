const express = require("express");
const answerRoute = express.Router();

// CONTROLLER
const AnswerController = require("../controller/AnswerController");

const answerController = new AnswerController();

// ROUTES: CRUD
answerRoute.post("/", answerController.create);
answerRoute.get("/", answerController.findAll);
answerRoute.get("/:answerID", answerController.findById);
answerRoute.put("/:answerID", answerController.put);
answerRoute.delete("/:answerID", answerController.delete);
answerRoute.delete("/delete/all", answerController.deleteAll);

module.exports = answerRoute;
