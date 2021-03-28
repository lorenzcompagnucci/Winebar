const Ordine = require('../models/ordine');
const Vino = require('../models/vino');

exports.saveNewOrder = async function(req, res) {
    const ordine = defineOrder(req);
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