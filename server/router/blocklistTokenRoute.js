const express = require("express");
const blocklistTokenRoute = express.Router();

// CONTROLLER
const BlocklistTokenController = require("../controller/BlocklistTokenController");

const blocklistTokenController = new BlocklistTokenController();

// ROUTES: CRUD
blocklistTokenRoute.post("/", blocklistTokenController.create);
blocklistTokenRoute.get("/", blocklistTokenController.findAll);
blocklistTokenRoute.get(
  "/:blocklistTokenID",
  blocklistTokenController.findById
);
blocklistTokenRoute.put("/:blocklistTokenID", blocklistTokenController.put);
blocklistTokenRoute.delete(
  "/:blocklistTokenID",
  blocklistTokenController.delete
);
blocklistTokenRoute.delete("/delete/all", blocklistTokenController.deleteAll);

module.exports = blocklistTokenRoute;
