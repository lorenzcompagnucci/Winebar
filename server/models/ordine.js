const mongoose = require('mongoose');

const ordineSchema = mongoose.Schema({
    id : mongoose.Types.ObjectId,
    utente : String,
    data : Date,
    importo : Number,
    indirizzo : String,
    telefono : String,
    vini: []
})

module.exports = mongoose.model('Ordine', ordineSchema);