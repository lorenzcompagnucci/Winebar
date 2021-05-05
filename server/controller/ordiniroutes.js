const Ordine = require('../models/ordine');
const Vino = require('../models/vino');

exports.getOrdini = async function (req, res) {
    try {
        const ordini = await (await Ordine.find());
        res.json(ordini);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

exports.getOrdineID = async function (req, res) {
    let ordine;
    try {
        ordine = await Ordine.findById(req.params.id);
        if (ordine == null) {
            return res.status(404).json({message: 'Ordine non trovato'})
        }
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
    res.ordine = ordine;
    next();
}

exports.getOrdineUser = async function(req, res) {
    try {
        let ordini = await Ordine.find();
        res.json(ordini.filter(function(Ordine){return Ordine.utente == req.params.utente}));
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

exports.saveOrder = async function(req, res) {
    const ordineadd=new Ordine({
        utente: req.body.utente,
        telefono: req.body.telefono,
        citta: req.body.citta,
        via: req.body.via,
        importo: req.body.importo,
        vini: req.body.vini,
        data: req.body.data
    }); 
    try {
       const newOrdine = await ordineadd.save();
       res.json(201);
    } catch(err) {
        console.log(err);
    }
}

exports.updateOrdine = async function(req, res) {
    try {
        const {utente, telefono, citta, via, importo, vini} = req.body;
        if (utente) {
            await Ordine.updateOne({_id : req.params.id},
                { $set:{"utente": req.body.utente}})
        }
        if (telefono) {
            await Ordine.updateOne({_id : req.params.id},
                { $set:{"utente": req.body.telefono}})
        }
        if (citta) {
            await Ordine.updateOne({_id : req.params.id},
                { $set:{"utente": req.body.citta}})
        }
        if (via) {
            await Ordine.updateOne({_id : req.params.id},
                { $set:{"utente": req.body.via}})
        }
        if (importo) {
            await Vino.updateOne({_id : req.params.id},
                { $set:{"importo": req.body.importo}})
        }
        if (vini) {
            await Vino.updateOne({_id : req.params.id},
                { $set:{"vini": req.body.vini}})
        }
        if (data) {
            await Vino.updateOne({_id : req.params.id},
                { $set:{"data": req.body.data}})
        }
        res.json({message: 'Aggiornamento fatto'});
    } catch (err) {
        res.json({message: err});
    }
}

exports.deleteOrdine = async function(req, res) {
    try {
        await res.ordini.remove();
        res.json({message: 'Cancellato'});
    } catch(err) {
        res.status(500).json({message: err.me});
    }
}

function controlloUtente(utenteOrdine, utenteRichiesta) {
    return utenteOrdine === utenteRichiesta;
}