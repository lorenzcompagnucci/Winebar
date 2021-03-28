const Vini = require('../models/vino');

exports.getVini = async function (req, res) {
    try {
        const vini = await Vini.find();
        res.json(vini);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}