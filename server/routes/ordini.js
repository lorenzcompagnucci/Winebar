const express = require('express');
const router = express.Router();
let Ordine = require('../models/ordine');

//Ritorna tutti gli ordini
router.get('/', async (req, res, next) => {
    const result = await Ordine.find();
    res.send(result);
})

//Ritorna gli ordini di quell'utente
router.get('/:utente', async (req, res, next) => {
    try {
        let ordini = await Ordine.find();
        res.json(ordini.filter(function(Ordine){return Ordine.utente == req.params.utente}));
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

//inserisce un ordine
router.post('/', async (req, res, next) => {
    try {
        const ordine = new Ordine({
            utente: req.body.utente,
            telefono: req.body.telefono,
            citta: req.body.citta,
            via: req.body.via,
            importo: req.body.importo,
            vini: req.body.vini,
            data: req.body.data
        });
        const result = await ordine.save();
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
})

//aggiorna un ordine
router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = {new: true};
        const result = await Ordine.findByIdAndUpdate(id, updates, options);
        res.send(result);
    } catch(error) {
        console.log(error.message);
    }
});

//elimina un ordine
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        await Ordine.findByIdAndDelete(id);
        res.send('DELETE Ordine ' + id + ' OK');
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router;