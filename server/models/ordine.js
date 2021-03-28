const mongoose = require('mongoose');

const ordineSchema = mongoose.Schema({
    id : mongoose.Types.ObjectId,
    utente : String,
    importo : Number,
    vino : mongoose.Types.ObjectId
})

module.exports = mongoose.model('Ordine', ordineSchema);