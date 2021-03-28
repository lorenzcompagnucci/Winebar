const express = require('express');
const router = express.Router();
let controller = require('../controller/ordiniroutes');

//Aggiunta di un ordine
router.post('/', controller.saveNewOrder);

module.exports = router;

/*
const express = require('express');
const ordiniRoute = express.Router();


let Ordini = require('../models/ordine');

ordiniRoute.route('/winebar/ordini').post((req, res, next) => {
    Ordini.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

module.exports = ordiniRoute;*/