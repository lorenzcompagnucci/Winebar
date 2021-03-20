const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Prodotto = require('../models/prodotto');

router.get("/", (req, res, next)=> {
    Prodotto.find().exec()
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

router.post('/', (req, res, next) => {
    const prod = new Prodotto({
        id : new mongoose.Types.ObjectId(),
        nome : req.body.nome,
        prezzo : req.body.prezzo
    })
    prod.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'POST requests per /prodotti',
            createdProd: result
        });
    })
    .catch(err => {
        console.log(err),
        res.status(500).json({error: err})
    });
    
});

router.get("/:productId", (req, res, next) => {
    const id = req.params.productId;
    Prodotto.findById(id).exec()
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

router.patch(":/productID", (req, res, next) => {
    const id = req.params.productId;
    const updateOperations = {};
    for (const ops of req.body) {
        updateOperations[ops.propName] = ops.value; 
    }
    Prodotto.update({id: id}, {$set: updateOperations}).exec().
    then(result => {
        console.log(result);
        res.status(200).json(result);
    }).
    catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete(":/productID", (req, res, next) => {
    const id = req.params.productId;
    Prodotto.remove({id: id}).exec().
    then(result => {
        res.status(200).json(result)
    }).
    catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

module.exports = router;