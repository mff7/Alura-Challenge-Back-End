const express = require("express");
const VideoController = require("../controllers/Video");

const routes = express.Router();

routes.post("/videos", VideoController.create);

routes.put("/videos/:id", VideoController.update);

routes.get("/videos", VideoController.index);
routes.get("/videos/:id", VideoController.showById);

routes.delete("/videos/:id", VideoController.delete);

module.exports = routes;
