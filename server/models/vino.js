const mongoose = require('mongoose');

const vinoSchema= mongoose.Schema({
    id : mongoose.Types.ObjectId,
    nome: String,
    annata: Date,
    prezzo: Number,
    tipo: String,
})

module.exports = mongoose.model('Vino', vinoSchema);