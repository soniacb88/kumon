const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const alumnoSchema = new Schema({
  nombre: String,
  apellidos: String,
  programa: String,
  nivelActual: String,
});

//activo : Boolean,
//ndicadorMensaje : Boolean,
//indicadorUltimoMensaje: Boolean,
//telefono : String 
const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;