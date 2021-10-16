const express = require('express');
const VehiculosController = require("../controllers/VehiculosController");

class vehiculos{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new VehiculosController.default();
        this.router.get("/vehicles", objServerC.getAllVehicles);
        this.router.get("/vehicles/:id", objServerC.getVehicles);
        this.router.post("/vehicles", objServerC.register);
        this.router.put("/vehicles", objServerC.update);
        this.router.delete("/vehicles", objServerC.deleteVehicles);        
    }
}

exports.default = vehiculos;