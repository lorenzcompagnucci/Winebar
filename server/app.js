const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbUser:dbUserPassword@progwebapp.fdcci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useMongoClient : true
});