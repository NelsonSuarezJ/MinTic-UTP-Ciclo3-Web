const mongoose = require('mongoose');
const schema = mongoose.Schema;

var vehiculosSchema = new schema({
    vehiculo: {
        type: String
    },
    idPlaca: {
        type: String
    },
    kilometraje: {
        type: Number
    },
    tecnoMecanica: {
        type: Date
    },
    soat: {
        type: Date
    }, 
    tarjetaPropiedad: {
        type: String
    },
}
,{
    collection: 'vehiculos'
});

vehiculosSchema.virtual('soatf')
  .set(function(fecha) {
    // El formato esperado es 'yyyy-mm-dd' que es el devuelto por el campo input
    // el valor recibido se almacenará en el campo fecha_nacimiento_iso de nuestro documento
    this.soat = new Date(fecha);
  })
  .get(function(){
    // el valor devuelto será un string en formato 'yyyy-mm-dd'
    return this.soat.toISOString().substring(0,10);
  });

  vehiculosSchema.virtual(' tecnoMecanicaf')
  .set(function(fecha) {
    // El formato esperado es 'yyyy-mm-dd' que es el devuelto por el campo input
    // el valor recibido se almacenará en el campo fecha_nacimiento_iso de nuestro documento
    this. tecnoMecanica = new Date(fecha);
  })
  .get(function(){
    // el valor devuelto será un string en formato 'yyyy-mm-dd'
    return this. tecnoMecanica.toISOString().substring(0,10);
  });

module.exports = mongoose.model('Vehiculos', vehiculosSchema);
