const mongoose = require ("mongoose");
const {Schema} = mongoose;


const userSchema = new Schema({
    email: {
        type:String,
        required: [true, "Debes poner un correo"]},

    password: {
        type:String,
        required: [true, "Introduce un password válido"]},

    origin: {
        type: String,
        enum: [ "google", 
                "facebook", 
                "youtube", 
                "publicidad", 
                "recomendacion"  ]}
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema)