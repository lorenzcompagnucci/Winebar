const mongoose = require('mongoose');

const utenteSchema = mongoose.Schema({
    email: {type: String, required: true}
})

module.exports = mongoose.model('Utente', utenteSchema);