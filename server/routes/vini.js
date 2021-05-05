let controller = require('../controller/viniroutes');
const express = require('express');
const router = express.Router();

//Ritorna tutti i vini
router.get('/', controller.getVini);
//Ritorna il vino corrispondente a quell'id
router.get('/:id', controller.getVinoID);
//inserisce un vino
router.post('/',controller.saveVino);
//elimina un vino
router.delete('/:id', controller.getVinoID, controller.deleteVino);
//aggiorna un vino
router.patch('/:id', controller.updateVino);


module.exports = router;