const mongoose = require('mongoose');

const vinoSchema= mongoose.Schema({
    id : mongoose.Types.ObjectId,
    marca: String,
    nome: String,
    annata: Date,
    prezzo: Number
})

module.exports = mongoose.model('Vino', vinoSchema);