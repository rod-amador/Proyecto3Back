const mongoose = require ("mongoose");
const {Schema} = mongoose;

/*Al hablar de libros pondré solo lo que se verá en el Front
Podría agregarse en un futuro  Tematica, pero no le veo 
de momento la utilidad suficiente para hacerlo
*/
const videoSchema = new Schema({

    title: {
        type: String,
        required: [true, "No hay libro sin título"]
    },

    description: {
        type:String,
        required: [true, "Debemos saber el tema"]},

    link: {
        type: String,
        required: [true, "Debe tener enlace para ver"]
    }

    },
    {timestamps: true}
);

module.exports = mongoose.model("Video", videoSchema)