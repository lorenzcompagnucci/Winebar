const express = require('express');
const router = express.Router();
let controller = require('../controller/ordiniroutes');

//Restituisce tutti gli ordini
router.get('/', controller.getOrdini);
//Restituisce gli ordini di un utente
router.get('/:utente', controller.getOrdineUser);
//Aggiunta di un ordine
router.post('/', controller.saveOrder);
//elimina un ordine
router.delete('/:id', controller.getOrdineID, controller.deleteOrdine);
//aggiorna un ordine
router.patch('/:id', controller.updateOrdine);

module.exports = router;