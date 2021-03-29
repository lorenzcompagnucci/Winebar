const mongoose = require('mongoose');

const viniSchema= mongoose.Schema({
    nome: String,
    annata: Number,
    prezzo: Number,
    tipo: String,
})

module.exports = mongoose.model('Vino', viniSchema);