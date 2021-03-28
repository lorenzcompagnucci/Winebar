const mongoose = require('mongoose');
const express = require('express');
const port = process.env.PORT || 3001;
const cors = require('cors');
const bodyParser = require('bodyparser');
const router = express();

mongoose.connect('mongodb+srv://dbUser:dbUserPassword@progwebapp.fdcci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true});

const viniRoutes = require('./routes/vini');
const ordiniRoutes = require('./routes/ordini');

router.use(bodyParser.json({extended: true}));
router.use(cors());
router.use('/api', viniRoutes);
router.use('/api', ordiniRoutes);

router.get('*', (req, res) => {
    res.send("Errore 404: not found!");
})

router.listen(port, () => {
    console.log("Listening..");
})