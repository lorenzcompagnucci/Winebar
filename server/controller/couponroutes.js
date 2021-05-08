const Coupon = require("../models/coupon");

exports.getCoupons = async function (req, res) {
    try {
        const coupons = await (await Coupon.find());
        res.json(coupons);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

exports.getCouponID = async function (req, res, next) {
    let coupon;
    try {
        coupon = await Coupon.findById(req.params.id);
        if (coupon == null) {
            return res.status(404).json({message: 'Ordine non trovato'})
        }
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
    res.coupon = coupon;
    next();
}

exports.saveCoupon = async function(req, res) {
    const nuovo = new Coupon({
        vino: req.body.vino,
        sconto: req.body.sconto,
        scadenza: req.body.scandeza,
        utenti: req.body.utenti
    }); 
    try {
       await nuovo.save();
       res.json(201);
    } catch(err) {
        console.log(err);
    }
}

exports.deleteCoupon = async function(req, res) {
    try {
        await res.coupon.remove();
        res.json({message: 'Cancellato'});
    } catch(err) {
        res.status(500).json({message: err.me});
    }
}