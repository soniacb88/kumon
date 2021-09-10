const mongoose = require("mongoose");
const Alumno = require("../models/alumno");



mongoose
  .connect('mongodb://localhost/kumon', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });



let alumnos = [
  {
    nombre: "Carlos",
    apellidos: "Dueñas Sáez",
    programa: "matemáticas",
    nivelActual: "K"
  },
  {
    nombre: "Arnold",
    apellidos: "Dueñas Cáceres",
    programa: "inglés",
    nivelActual: "4A"
  }
]

Alumno.deleteMany()
  .then(() => {
    return Alumno.create(alumnos)
  }).then(() => mongoose.disconnect())
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

