const Ordine = require('../models/ordine');
const Vino = require('../models/vino');

exports.getOrdini = async function (req, res) {
    try {
        const ordini = await Ordine.find();
        res.json(ordini);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

exports.saveOrder = async function(req, res) {
    const ordine = defineOrdine(req);
    if (ordine == null) {
        res.status(400).json({message: "Ordine null"});
    } else {
        try {
            await controlData(res, ordine);
            if (res.status >= 400) {
                res.json({message: err.message});
            } else {
                await ordine.save();
                res.status(201).json("Ordine inserito");
            }
        } catch(err) {
            res.status(400).json({message: err.message});
        }
    }
}