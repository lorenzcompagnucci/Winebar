const express = require('express');
const router = express.Router();
let controller = require('../controller/ordiniroutes');

//Aggiunta di un ordine
router.post('/', controller.saveNewOrder);

module.exports = router;