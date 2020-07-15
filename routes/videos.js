const express = require ("express");
const router = express.Router();
const Video = require("../models/Video")


/*
Todo el CRUD de video funcionando adecuadamente
Solo necesita GET, POST y DELETE debido a que únicamente yo subiré el material.
*/

//GET VIDEOS -> funcionando
router.get("/", (req,res)=>{
    Video.find ()  
        .then ( (content)=>res.status(200).json(  {result:content}  ))
        .catch( (err  )  =>res.status(400).json(  {err}           ))
});

// GET BY ID -> funcionando
router.get("/:id", (req, res) => {
    const { id } = req.params;
    Video.findById( id )
      .then((result) => {res.status(200).json({ result }); })
      .catch((err) => res.status(400).json(err));
  });


// POST VIDEOS -> funcionando
router.post("/", (req,res)=>{
    Video.create(req.body)       
        .then ( (content)=>res.status(201).json(  {result:content}  ))
        .catch( (err  )  =>res.status(400).json(  {err}           ))
})

  
//DELETE VIDEOS -> funcionando
router.delete("/:id",  (req, res, ) => {
    const { id } = req.params;
    Video.findByIdAndDelete(id)
      .then ( (deleted) => res.status(200).json( { deleted } ))
      .catch( (reason)  => res.status(400).json( { error: reason } ));
  });
    

module.exports= router;