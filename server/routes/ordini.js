const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Ordine = require('../models/ordine');

router.get("/", (req, res, next)=> {
    Ordine.find().exec()
    .then(docs => {
        console.log(docs);
        if (docs.length >= 0) {
            res.status(200).json(docs);
        } else {
            res.status(404).json({message: "Non ho trovato niente"});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
});

router.post("/", (req, res, next) => {
    const ordine = new Ordine({
        id : new mongoose.Types.ObjectId(),
        utente : req.body.utente,
        data : req.body.data,
        importo : req.body.importo,
        indirizzo : req.body.indirizzo,
        telefono : req.body.telefono,
        vini: req.body.vini
    })
    ordine.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'POST requests per /ordine',
            createdOrdine: result
        });
    })
    .catch(err => {
        console.log(err),
        res.status(500).json({error: err})
    });
});

router.get("/:ordineId", (req, res, next) => {
    const id = req.params.ordineId;
    Ordine.findById(id).exec()
    .then(doc => {
        console.log(doc);
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({message: "L'id non corrisponde a nessun prodotto"});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.patch(":/ordineID", (req, res, next) => {
    const id = req.params.productId;
    const updateOperations = {};
    for (const ops of req.body) {
        updateOperations[ops.propName] = ops.value; 
    }
    Ordine.update({id: id}, {$set: updateOperations}).exec().
    then(result => {
        console.log(result);
        res.status(200).json(result);
    }).
    catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete(":/ordineID", (req, res, next) => {
    const id = req.params.productId;
    Ordine.remove({id: id}).exec().
    then(result => {
        res.status(200).json(result)
    }).
    catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

module.exports = router;