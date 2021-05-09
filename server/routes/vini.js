const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check_jwt');
let Vino = require('../models/vino');

//Ritorna tutti i vini
router.get('/', async (req, res, next) => {
    const result = await Vino.find();
    res.send(result);
})

//Ritorna il vino corrispondente a quell'id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await Vino.findById(id);
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
})

//inserisce un vino
router.post('/', async (req, res, next) => {
    try {
        const vino = new Vino({
            nome: req.body.nome,
            annata: req.body.annata,
            prezzo: req.body.prezzo,
            tipo: req.body.tipo,
        });
        const result = await vino.save();
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
})

//aggiorna un vino
router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = {new: true};
        const result = await Vino.findByIdAndUpdate(id, updates, options);
        res.send(result);
    } catch(error) {
        console.log(error.message);
    }
});

//elimina un vino
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        await Vino.findByIdAndDelete(id);
        res.send('DELETE Vino ' + id + ' OK');
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router;