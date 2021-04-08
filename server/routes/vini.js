let controller = require('../controller/viniroutes');
const express = require('express');
const router = express.Router();

//Ritorna tutti i vini
router.get('/', controller.getVini);
//inserisce un vino
router.post('/',controller.saveVino);
//elimina un vino
router.delete('/:id', controller.getVino, controller.deleteVino);
//aggiorna un vino
router.patch('/:id', controller.updateVino);


module.exports = router;