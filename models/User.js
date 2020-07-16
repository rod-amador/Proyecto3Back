const mongoose = require ("mongoose");
const {Schema} = mongoose;


const userSchema = new Schema({

    name: {
        type: String},

    email: {
        type:String,
        required: [true, "Debes poner un correo"],
        unique: [true, "Ya existe este corre"]
    },

    password: {
        type:String,
        required: [true, "Introduce un password válido"]},

    origin: {
        type: String,
        enum: [ "google", 
                "facebook", 
                "youtube", 
                "marketing", 
                "conocidos"  ]}
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema)