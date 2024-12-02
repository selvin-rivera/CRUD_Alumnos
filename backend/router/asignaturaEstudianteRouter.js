const express = require('express')
const asignaturaEstudianteController= require('../controller/AsignaturaEstudianteController')


const router = express.Router();

router.get('/',asignaturaEstudianteController.getAsignaturaEstudiante)
router.post('/',asignaturaEstudianteController.postAsignaturaEstudiante)
router.put('/id',asignaturaEstudianteController.putAsignaturaEstudiante)
router.delete('/id',asignaturaEstudianteController.deleteAsignaturaEstudiante)


module.exports= router;