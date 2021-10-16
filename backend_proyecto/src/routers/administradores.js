const express = require('express');
const AdministradoresController = require("../controllers/AdministradoresController");


class administradores{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new AdministradoresController.default();
        this.router.get("/users", objServerC.getAllUsers);
        this.router.get("/users/:id", objServerC.getUsers);
        this.router.post("/users", objServerC.register);
        this.router.put("/users", objServerC.update);
        this.router.delete("/users", objServerC.deleteUsers);        
    }
}

exports.default = administradores;