const mongoose = require('mongoose');
const database = require('./database/dbconn');

mongoose.connect('mongodb+srv://dbUser:dbUserPassword@progwebapp.fdcci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useMongoClient : true
});