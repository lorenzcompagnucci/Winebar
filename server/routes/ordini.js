const express = require('express');
const router = express.Router();
let controller = require('../controller/ordiniroutes');

//Restituisce tutti gli ordini
router.get('/', controller.getOrdini);
//Aggiunta di un ordine
router.post('/', controller.saveOrder);
//elimina un ordine
router.delete('/:id', controller.getOrdine, controller.deleteOrdine);
//aggiorna un ordine
router.patch('/:id', controller.updateOrdine);


module.exports = router;