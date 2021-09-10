require('dotenv').config();
const express = require("express");
const router = express.Router({
  mergeParams: true
});

const Alumno = require("../models/alumno")
  ;

router.get("/", (req, res, next) => {
  Alumno.find()
    .then(alumnosDB => {
      res.render("listaalumnos", { alumnos: alumnosDB })
    })

})

router.get("/nuevoAlumno", (req, res, next) => {
  res.render("nuevoAlumno", {
  })
})

router.post("/nuevoAlumno", (req, res, next) => {
  const nombre = req.body.nombre;
  const apellidos = req.body.apellidos;
  const programa = req.body.programa;
  const nivelActual = req.body.nivelActual

  const nuevoAlumno = new Alumno({
    nombre,
    apellidos,
    programa,
    nivelActual
  });
  console.log('hollllaaa', nuevoAlumno)

  nuevoAlumno.save().then(() => res.redirect("/alumnos")).catch((err) => console.log(err))
})

router.get("/:id", (req, res, next) => {
  Alumno.findById(req.params.id)
    .then(alumno => {
      res.render("detalles-alumno", { alumno: alumno });
    })
})

router.get("/delete/:id", (req, res, next) => {
  Alumno.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/alumnos");
    })
})

router.get("/edit/:id", (req, res, next) => {
  Alumno.findById(req.params.id)
    .then(alumno => {
      console.log('+++++++++++++++++++++', alumno, { alumno })
      res.render("editarAlumno", { alumno })
    })
})

router.post("/edit/:id", (req, res, next) => {
  const {
    nombre,
    apellidos,
    programa,
    nivelActual,
  } = req.body



  Alumno.findByIdAndUpdate(req.params.id, {
    nombre,
    apellidos,
    programa,
    nivelActual
  })
    .then(() =>
      res.redirect(`/alumnos/${req.params.id}`)
    )
    .catch(err => console.log(err))


  res.redirect(`/alumnos/${req.params.id}`)

})


module.exports = router;