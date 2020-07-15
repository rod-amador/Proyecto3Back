const express = require ("express");
const router = express.Router();
const Book = require("../models/Book")


/*
Todo el CRUD de libros funcionando adecuadamente
Solo necesita GET, POST y DELETE debido a que únicamente yo subiré el material.
*/

//GET LIBROS -> funcionando
router.get("/", (req,res)=>{
    Book.find ()  
        .then ( (content)=>res.status(200).json(  {result:content}  ))
        .catch( (err  )  =>res.status(400).json(  {err}           ))
});
// GET BY ID -> funcionando
router.get("/:id", (req, res) => {
    const { id } = req.params;
    User.findById( id )
      .then((result) => {res.status(200).json({ result }); })
      .catch((err) => res.status(400).json(err));
  });


// POST LIBROS -> funcionando
router.post("/", (req,res)=>{
    Book.create(req.body)       
        .then ( (content)=>res.status(201).json(  {result:content}  ))
        .catch( (err  )  =>res.status(400).json(  {err}           ))
})

  
//DELETE LIBROS -> funcionando
router.delete("/:id",  (req, res, ) => {
    const { id } = req.params;
    Book.findByIdAndDelete(id)
      .then ( (deleted) => res.status(200).json( { deleted } ))
      .catch( (reason)  => res.status(400).json( { error: reason } ));
  });
    

module.exports= router;