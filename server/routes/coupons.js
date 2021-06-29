const express = require('express');
const router = express.Router();
let Coupon = require('../models/coupon');

//Ritorna tutti i coupons
router.get('/', async (req, res, next) => {
    const result = await Coupon.find();
    res.send(result);
})

//Ritorna il coupon corrispondente a quell'id
router.get('/:id', async (req, res, next) => {
    try {
        const result = await Coupon.findById(req.params.id);
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
})

//inserisce un coupon
router.post('/', async (req, res, next) => {
    try {
        //const coupon = new Coupon(req.body);
        const coupon = new Coupon({
            vino: req.body.vino,
            sconto: req.body.sconto,
            utenti: req.body.utenti
        });
        const result = await coupon.save();
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
})

//aggiorna un coupon
router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = {new: true};
        const result = await Coupon.findByIdAndUpdate(id, updates, options);
        res.send(result);
    } catch(error) {
        console.log(error.message);
    }
});

//elimina un coupon
router.delete('/:id', async (req, res, next) => {
    try {
        const result = await Coupon.findByIdAndDelete(req.params.id);
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router;