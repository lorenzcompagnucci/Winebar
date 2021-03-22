const mongoose = require('mongoose');
const Vini = require('vino.js');

const ordineSchema= mongoose.Schema({
    id : mongoose.Types.ObjectId,
    utente : String,
    data : Date,
    importo : Number,
    indirizzo : String,
    telefono : String,
    Vini : [],
})

module.exports = mongoose.model('Ordine', ordineSchema);