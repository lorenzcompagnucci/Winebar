const mongoose = require('mongoose');

const ordineSchema = mongoose.Schema({
    utente : String,
    telefono: String,
    citta: String,
    via: String,
    importo : Number,
    vini: [],
    data: String
})

module.exports = mongoose.model('Ordine', ordineSchema);