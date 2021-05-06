const Vino = require('../models/vino');

exports.getVini = async function (req, res) {
    try {
        const vini = await Vino.find();
        res.json(vini);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

exports.getVinoID = async function (req, res, next) {
    let vino;
    try {
        vino = await Vino.findById(req.params.id);
        if (vino == null) {
            return res.status(404).json({message: 'Vino non trovato'})
        }
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
    res.vino = vino;
    next();
}

exports.saveVino = async function(req, res){
    const nuovo = new Vino({
        nome: req.body.nome,
        prezzo: req.body.prezzo,
        annata: req.body.annata,
        tipo: req.body.tipo
    }); 
    try {
       await nuovo.save();
       res.json(201);
    } catch(err){
        console.log(err);
    }
}

exports.updateVino = async function(req, res) {
    try {
        const {nome, prezzo, annata, tipo} = req.body;
        if (nome) {
            await Vino.updateOne({_id : req.params.id},
                { $set:{"nome": req.body.nome}})
        }
        if (prezzo) {
            await Vino.updateOne({_id : req.params.id},
                { $set:{"prezzo": req.body.prezzo}})
        }
        if (annata) {
            await Vino.updateOne({_id : req.params.id},
                { $set:{"annata": req.body.annata}})
        }
        if (tipo) {
            await Vino.updateOne({_id : req.params.id},
                { $set:{"tipo": req.body.tipo}})
        }
        res.json({message: 'Aggiornamento fatto'});
    } catch (err) {
        res.json({message: err});
    }
}

exports.deleteVino = async function(req, res) {
    try {
        await res.vino.remove();
        res.json({message: 'Cancellato'});
    } catch(err) {
        res.status(500).json({message: err.me});
    }
}