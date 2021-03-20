mongoose = require('mongoose');
require('dotenv').config();

const connect = async() => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true,useUnifiedTopology:false});
        console.log("Connessione con il database effettuata con successo");
    } catch(err) {
        console.log(err);
    }
}

module.exports = connect;