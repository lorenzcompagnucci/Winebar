let controller = require('../controller/viniroutes');
const express = require('express');
const router = express.Router();

//Ritorna tutti i vini
router.get('/', controller.getVini);
//inserisce un vino
router.post('/',controller.saveVino);

module.exports = router;