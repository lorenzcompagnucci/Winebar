const mongoose = require('mongoose');
const Prodotti = require('prodotto.js');

const ordineSchema= mongoose.Schema({
    id : mongoose.Types.ObjectId,
    utente : String,
    data : Date,
    importo : Number,
    indirizzo : String,
    telefono : String,
    Prodotti : []
})

module.exports = mongoose.model('Ordine', ordineSchema);