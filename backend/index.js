const express = require('express')
const estudianteRouter = require('./router/estudianteRouter')
const asignaturaRouter = require('./router/asignaturaRouter')
const asignaturaEstudianteRouter = require('./router/asignaturaEstudianteRouter')
const Estudiante = require('./Modelos/Estudiante')
const Asignatura = require('./Modelos/Asignatura')
const AsignaturaEstudiante = require('./Modelos/AsignaturaEstudiante')


const app= express();

app.use(express.json())

var port = 6000;

app.use('/estudiante',estudianteRouter);
app.use('/asignatura',asignaturaRouter);
app.use('/asignaturaestudiante',asignaturaEstudianteRouter);


//index + controller

//me sirve para listar elementos
/*app.get('/estudiante', async(req,resp) =>{

  try {
      
    const result = await Estudiante.findAll();

    if(result){
      resp.status(200).json(result)
    }
    else{
      resp.status(402).json("No encontraron registros")
    }


  } catch (error) {
      resp.status(500).json({error: 'Ocurrio un error' + error})
  }
 

});

//para agregar elemets

app.post('/estudiante', async (req,resp)=>{
  try {
    
    const result =await Estudiante.create(req.body);
    resp.json(result)

  } catch (error) {
    resp.status(500).json({error: 'Ocurrio un error' + error})
  }
})

//para actualizar

app.put('/estudiante/:idestudiante', async (req,resp)=>{

  try {
    
    const result =await Estudiante.findByPk(req.params.idestudiante);

    if(result){
      await result.update(req.body);
      resp.status(200).send("actualizado correctamente")
    }
    else{
      resp.status(402).send("No se encontraron registro")
    }
   
   
  } catch (error) {
    resp.status(500).json({error: 'Ocurrio un error' + error})
  }
})


// para eliminar

app.delete('/estudiante/:idestudiante', async (req,resp)=>{

  try {
    
    const result =await Estudiante.findByPk(req.params.idestudiante);

    if(result){
      await result.destroy();
      resp.status(200).send("Elimado correctamente")
    }
    else{
      resp.status(402).send("No se encontraron registro")
    }
   

  } catch (error) {
    resp.status(500).json({error: 'Ocurrio un error' + error})
  }
})*/


//c

app.listen(port,()=>{
    console.log('Ejecutando en puerto', port)
})

//Conexion BD
//controladores
//router
//modelos (sequelize)

//M V C