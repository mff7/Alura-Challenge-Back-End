const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {})
    .catch((err) => {});

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 5000, () => {});
