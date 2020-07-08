const mongoose = require ("mongoose");
const {Schema} = mongoose;


const contentSchema = new Schema({
    
    contentType: {type: String,
                 required: [true, "Debes escoger que tipo de contenido es"],
                 enum: [ "video", 
                         "article", 
                         "book",      
                        ]},

    topic: {type: String,
            required: [true, "Debes poner un tema"],
            enum: [ 
                "fintech", 
                "inversion", 
                "bolsa", 
                "primeros pasos",
                "consejos",
                "libro", 
                "pasivos",
                "enlaces de afiliado",
                "ahorro seguro",
                ]},

    title: {type: String,
            required: [true, "Debes poner un titulo"]},

    description: {type: String,
            required: [true, "Escribe una descripción"]},

    link: {type: String,
            required: [true, "Debes poner un enlace"]},

    }, {timestamps: true}
);

module.exports = mongoose.model("Content", contentSchema)

//contentType / topic / title / description / link 