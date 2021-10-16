const mongoose = require('mongoose');
const schema = mongoose.Schema;

var superAdSchema = new schema({
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
    collection: 'superAd'
});

module.exports = mongoose.model('SuperAd', superAdSchema);
