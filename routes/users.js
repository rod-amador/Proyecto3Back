const express = require ("express");
const router = express.Router();
const User = require("../models/User")

// para cifrado de datos PASSWORD
const bcrypt = require("bcrypt")
const jwt = require ("jsonwebtoken")

// RUTAS GET -> GENERAL Y POR ID
router.get("/", (req,res)=>{
    User.find ()  //vacio para que traiga todo
        .then ( (users)=>res.status(200).json(  {result:users}  ))
        .catch( (err  )=>res.status(400).json(  {err}           ))
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    User.findById( id )
      .then((result) => {res.status(200).json({ result }); })
      .catch((err) => res.status(400).json(err));
  });
  
// POST PRUEBA BÁSICA -> NO SE USARÁ EN FRONT-> SOLO PARA TESTS
router.post("/", (req,res)=>{
    User.create(req.body)   
        .then ( (users)=>res.status(201).json(  {result:users}  ))
        .catch( (err  )=>res.status(400).json(  {err}           ))
});

//UPDATE -> FUNCIONANDO
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { password, ...userValues } = req.body;
    bcrypt.hash(password, 10).then((hashedPassword) => {
      const user = { ...userValues, password: hashedPassword };
      // Note that new returns the updated version
      User.findByIdAndUpdate(id, user, { new: true })
        .then( (updated) => {
                if (updated) {
                    // PARA remover el password
                    const flatUser = updated.toObject();
                    const { password, ...userWithoutPassword } = flatUser;
                    res.status(200).json(userWithoutPassword);} 

                else {res.status(404).json({});}
            })
        .catch((reason) => res.status(400).json({ error: reason }));
    });
  });

//DELETE -> FUNCIONANDO
router.delete("/:id",  (req, res, ) => {
    const { id } = req.params;
    User.findByIdAndDelete(id)
      .then((deleted) => res.status(200).json({ deleted }))
      .catch((reason) => res.status(400).json({ error: reason }));
  });
    

///////////////////////////////////////////////////////////////
//SIGNUP LOGIN &LOGOUT/////////////////////////////////////////

//signup -> FUNCIONANDO
router.post("/signup", (req, res)=>{
    const {password, ...userValues} = req.body
    bcrypt.hash(password, 10)
        .then(hashedPass =>{
            const user = {...userValues, password: hashedPass}
            User.create(user)
                .then(  ()    => res.status(200).json( {msg: "Usuario creado"} ))
                .catch( ( err)=> res.status(400).json(err)    );
        });
    });

//login -> FUNCIONANDO
router.post("/login", (req,res)=>{
    const {email, password} = req.body;

    if (!email || !password) return res.status(400).json({msg:"No se envío la info"})
    User.findOne({ email })
        .then( user=>{
            if ( user=== null) return res.status(404).json({msg: "No existe ese usuario"});

            // todo funciona menos aqui algo tiene el token
            // ya funciona, faltaba el return 
        bcrypt.compare(password, user.password)
        .then(match=>{
            if (match) {
                const userObject = user.toObject();
                const {password, ...userNoPass} = userObject;
                const token = jwt.sign( {id: User.email}, process.env.SECRET,
                        {expiresIn: "1d"} );

                return res
                    .cookie("token", token, {
                        expires: new Date (Date.now() + 86400000),
                        secure:false,
                        httpOnly: true,})

                    .json ({ user: userNoPass } )   
                            }              
            return res.status(400).json({ msg: "Contraseña incorrecta"})
       
        }); 
    });
    
});

// logout -> FUNCIONANDO
router.post("/logout", (req,res)=>{
    res.clearCookie("token").json( {message: "logout"} )
  });


module.exports= router;