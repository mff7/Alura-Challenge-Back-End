const express = require("express");
const VideoRoutes = require("./routes/videoRoutes")

const app = express();

app.use(VideoRoutes)

module.exports = app;