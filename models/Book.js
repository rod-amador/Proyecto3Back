const mongoose = require ("mongoose");
const {Schema} = mongoose;

/*Al hablar de libros pondré solo lo que se verá en el Front
Podría agregarse en un futuro  Tematica, pero no le veo 
de momento la utilidad suficiente para hacerlo
*/
const bookSchema = new Schema({

    title: {
        type: String,
        required: [true, "No hay libro sin título"]
    },

    author: {
        type:String,
        required: [true, "Todo libro tiene nombre"]},

    description: {
        type:String,
        required: [true, "Debemos saber el tema"]},

    link: {
        type: String,
        required: [true, "Debe tener enlace para compra"]
    },

    image: {
        type: String,
        required: [true, "Debe tener una imagen"]
    }

    },
    {timestamps: true}
);

module.exports = mongoose.model("Book", bookSchema)