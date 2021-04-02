const express = require('express');
const router = express.Router();
let controller = require('../controller/ordiniroutes');

//Restituisce tutti gli ordini
router.get('/', controller.getOrdini);
//Aggiunta di un ordine
router.post('/', controller.saveOrder);

module.exports = router;