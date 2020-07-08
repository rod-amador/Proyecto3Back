const express = require ("express");
const router = express.Router();
const User = require("../models/User")

// para cifrado de datos PASSWORD

const bcrypt = require("bcrypt")
const jwt = require ("jsonwebtoken")

// controlador GET // Verificar que busque todos los usuarios 
router.get("/", (req,res)=>{
    User.find ()  //vacio para que traiga todo
        .then ( (users)=>res.status(200).json(  {result:users}  ))
        .catch( (err  )=>res.status(400).json(  {err}           ))
});

// POST crear usuario // Verificar ruta cree nuevo usuario
router.post("/", (req,res)=>{
    User.create(req.body)       // para q insomnia lo grabe
        .then ( (users)=>res.status(201).json(  {result:users}  ))
        .catch( (err  )=>res.status(400).json(  {err}           ))
});

// /SIGNUP --> REGISTRO
//users/signup
// insomnia check users/signup --> funcionando hash y signup

router.post("/signup", (req, res)=>{
    const {password, ...userValues} = req.body
    bcrypt.hash(password, 10)
        .then(hashedPass =>{
            const user = {...userValues, password: hashedPass}
            User.create(user)
                .then(  ()    => res.status(200).json( {msg: "Usuario creado"} ))
                .catch( ( err)=> res.status(400).json(err)    )
        })
    });

// ruta del login 
// 1° tener usuario
// 2° validador inicial
// 3° se busca email --> si no existe, msg
// 4° contraseña concidir --> comparar 
// 5° convertir en obj plano y quitar psswrd
// 6° creamos token y hasheamos --> se agrega .env
// 7° fecha en que expira la cookie
// 8° regresar el json sin el password o passwrd incorrecto

//contraseña incorrecta funciona bn
// si el correo no existe funciona bien
// 
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

// logout
router.post("/logout", (req,res)=>{
    res.clearCookie("token").json( {message: "logout"} )
  });


module.exports= router;