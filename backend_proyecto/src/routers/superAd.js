const express = require('express');
const SuperAdController = require("../controllers/SuperAdController");


class superAd{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new SuperAdController.default();
        this.router.get("/superAd", objServerC.getAllSuperAd);
        this.router.get("/superAd/:id", objServerC.getSuperAd);
        this.router.post("/superAd", objServerC.register);
        this.router.put("/superAd", objServerC.update);
        this.router.delete("/superAd", objServerC.deleteSuperAd);        
    }
}

exports.default = superAd;