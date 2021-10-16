const mongoose = require('mongoose');
const schema = mongoose.Schema;

var preoperacionalSchema = new schema({
    placa: String,
    luces: { type: String, default: "PE" },
    frenos: { type: String, default: "PE" },
    espejos: { type: String, default: "PE" },
    gato: { type: String, default: "PE" },
    cinturones: { type: String, default: "PE" },
    aceitemotor: { type: String, default: "PE" },
    liquidofrenos: { type: String, default: "PE" },
    creado: { type: Date, default: Date.now },
    idconductor: { type: String, default: "NN" }
}, {
    collection: 'preoperacional'
});

module.exports = mongoose.model('Preoperacional', preoperacionalSchema);