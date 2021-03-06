const express = require("express");
const cors = require("cors");

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
        this.cors();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require("./routes"));
    }

    cors() {
        this.express.use(cors());
    }
}

module.exports = new AppController().express;
