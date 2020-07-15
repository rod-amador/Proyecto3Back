const jwt = require ("jsonwebtoken");
const User = require ("../models/User");

exports.verifyToken = (req,res,next)=>{
    const {token} = req.cookies;
    jwt.verify(token, process.env.SECRET, (err, decoded)=>{
        if (err) return res.status(401).json(err);

        User.findById(decoded.id)
            .then( 
                user => {req.user = user;
                next();
            });
    });
};