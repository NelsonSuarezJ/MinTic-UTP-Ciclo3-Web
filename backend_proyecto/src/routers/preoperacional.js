const express = require('express');
const PreopController = require("../controllers/PreopController");

class preoperacional {
    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        const objServerP = new PreopController.default();
        this.router.get("/preoperacional", objServerP.getAllPreop);
        this.router.get("/preoperacional/:id", objServerP.getPreop);
        this.router.post("/preoperacional", objServerP.crear);
        this.router.put("/preoperacional", objServerP.update);
        this.router.delete("/preoperacional", objServerP.deletePreop);
    }
}

exports.default = preoperacional;