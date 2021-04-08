const mongoose = require('mongoose');
require('dotenv').config();

const connect = async() => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true,useUnifiedTopology:false});
        console.log("CONNESSIONE CON IL DATABASE EFFETTUATA CON SUCCESSO!");
    } catch(err) {
        console.log(err);
    }
}

module.exports = connect;