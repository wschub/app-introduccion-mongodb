const { Router } = require('express');
const router = Router();



const Alumno = require('../models/Alumno');

router.get('/', async (req, res) => {
    //Ordenando datos sort: 1-Asc.  -1:Desc
    const alumnos = await Alumno.find().sort('-_id');
    res.json(alumnos);
});

router.post('/', async (req, res) => {
    const { nombre, apellidos, edad } = req.body;
    const newAlumno = new Alumno({nombre, apellidos, edad});
    console.log(newAlumno)
    await newAlumno.save();
    res.json({'message': 'Alumno registrado'});
});

router.delete('/:id', async (req, res) => {
    const alumno = await Alumno.findByIdAndDelete(req.params.id);
    //await unlink(path.resolve('./backend/public/' + book.imagePath));
    res.json({message: 'Alumno eliminado'});
});


router.put('/:id',async (req,res)=>{
    res.json({
        message:'put test...'
    });
});

/*router.put('/:id',async (req,res) => {
    console.log('put...');

   const { nombre, apellidos, edad } = req.body;
   const id = req.params.id;

   const updateAlumno = new Alumno({nombre, apellidos, edad});
   await newAlumno.update({'_id':ObjectID(id)},updateAlumno);
   console.log('put...');
    res.json({
        message:'Alumno editado'
    });
}); */


module.exports = router;