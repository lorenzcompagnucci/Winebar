const mongoose = require('mongoose');

const ordineSchema = mongoose.Schema({
    utente : String,
    importo : Number,
    vini: []
})

module.exports = mongoose.model('Ordine', ordineSchema);