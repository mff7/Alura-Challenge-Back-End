const express = require("express");
const VideoRoutes = require("./routes/Video")

const app = express();

app.use(VideoRoutes)

module.exports = app;