const express = require ("express");
const router = express.Router();
const Book = require("../models/Book")


/*
Este modelo se creo para utilizar enlaces de afiliados 
por lo tanto, sólamente YO tendré el control total de lo que 
se publica y elimina. 

Solo necesito un GET, POST y DELETE
*/

//GET LIBROS -> funcionando
router.get("/", (req,res)=>{
    Book.find ()  //vacio para que traiga todo
        .then ( (content)=>res.status(200).json(  {result:content}  ))
        .catch( (err  )  =>res.status(400).json(  {err}           ))
});

// POST LIBROS -> funcionando
router.post("/", (req,res)=>{
    Book.create(req.body)       // para q insomnia lo grabe
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