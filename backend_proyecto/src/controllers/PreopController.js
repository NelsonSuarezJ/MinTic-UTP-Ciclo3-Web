const preoperacional = require('../models/preoperacional');



class PreoperanalController {
    constructor() {

    }

    crear(req, res) {
        preoperacional.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }

    /* register(req, res) {
        //obtener datos
        let { id, nombre, apellido } = req.body;
        console.log("Usuario registrado con éxito");
        console.table({ id, nombre, apellido });
        users.push(req.body);
        res.status(200).json({
            message: "Usuario registrado con éxito"
        });
    } */

    /*    update(req, res) {
            let { id, nombre, apellido } = req.body;
            console.table({ id, nombre, apellido });
    
            users.forEach(element => {
                if (id == element.id) {
                    element.nombre = nombre;
                    element.apellido = apellido;
                }
            });
    
            if (users != null) {
                res.status(200).json(users);
            } else {
                res.status(400).json({ message: "Usuario no encontrado" });
            }
        }*/

    // update(req, res) {
    //     let { id, idDocumentoAdmin, nombre, apellido, email, telefono, clave, estado } = req.body;
    //     let obj = { idDocumentoAdmin, nombre, apellido, email, telefono, clave, estado }
    //     preoperacional.findByIdAndUpdate(id, { $set: obj }, (error, data) => {
    //         if (error) {
    //             res.status(500).send();
    //         } else {
    //             res.status(200).json(data);
    //         }
    //     })
    // }

    update(req, res) {
        preoperacional.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }



    /*deleteUser(req, res) {
        let { id } = req.body;
        console.table({ id });
    
        let tempUser = [];
        users.forEach(element => {
            if (id != element.id) {
                tempUser.push(element);
            }
        });
    
        users = tempUser;
        if (users != null) {
            res.status(200).json(users);
        } else {
            res.status(400).json({ message: "Usuario no encontrado" });
        }
    }*/

    deletePreop(req, res) {
        //let { id } = req.body;
        let id = req.params.id
        preoperacional.findByIdAndDelete(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }


    /*    getUsers(req, res) {
            let id = req.params.id;
            let userResp = null;
            users.forEach(element => {
                if (id == element.id) {
                    userResp = element;
                }
            });
     
            if (userResp != null) {
                res.status(200).json(userResp);
            } else {
                res.status(400).json({ message: "Usuario no encontrado" });
            }
        }*/

    getPreop(req, res) {
        let id = req.params.id;
        preoperacional.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    /*    getAllUsers(req, res) {
            res.status(200).json(users);
        }*/

    getAllPreop(req, res) {
        preoperacional.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

}

exports.default = PreoperanalController;