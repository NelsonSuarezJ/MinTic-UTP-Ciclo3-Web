const express = require('express');
const ConductoresController = require("../controllers/ConductoresController");


class conductores{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new ConductoresController.default();
        this.router.get("/drivers", objServerC.getAllDrivers);
        this.router.get("/drivers/:id", objServerC.getDrivers);
        this.router.post("/drivers", objServerC.register);
        this.router.put("/drivers", objServerC.update);
        this.router.delete("/drivers", objServerC.deleteDrivers);        
    }
}

exports.default = conductores;