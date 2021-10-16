const mongoose = require('mongoose');
const schema = mongoose.Schema;

var administradoresSchema = new schema({
    idDocumentoUsu: {
        type: Number
    },
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    rol: {
        type: String
    },
    
    telefono: {
        type: Number
    },
    email: {
        type: String
    }, 
    clave: {
        type: String
    },
    
}
,{
    collection: 'administradores'
});

module.exports = mongoose.model('administradores', administradoresSchema);
