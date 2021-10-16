const mongoose = require('mongoose');
const schema = mongoose.Schema;

var conductoresSchema = new schema({
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
    licencia: {
        type: String
    },
    
    telefono: {
        type: Number
    },
    clave: {
        type: String
    },
    email: {
        type: String
    }, 
    
}
,{
    collection: 'conductores'
});

module.exports = mongoose.model('Conductores', conductoresSchema);
