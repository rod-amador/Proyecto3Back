const express = require ("express");
const router = express.Router();
const Content = require("../models/Content")

// controlador GET // Verificar que busque todos los usuarios 
router.get("/", (req,res)=>{
    Content.find ()  //vacio para que traiga todo
        .then ( (content)=>res.status(200).json(  {result:content}  ))
        .catch( (err  )  =>res.status(400).json(  {err}           ))
});

// POST crear usuario // Verificar que cree nuevo usuario
router.post("/", (req,res)=>{
    Content.create(req.body)       // para q insomnia lo grabe
        .then ( (content)=>res.status(201).json(  {result:content}  ))
        .catch( (err  )  =>res.status(400).json(  {err}           ))
})


module.exports= router;