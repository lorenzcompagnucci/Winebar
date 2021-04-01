const Vino = require('../models/vino');

exports.getVini = async function (req, res) {
    try {
        const vini = await Vino.find();
        res.json(vini);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

exports.saveVino = async function(req, res){
    const vinoadd=new Vino({
        nome: req.body.nome,
        prezzo: req.body.prezzo,
        annata: req.body.annata,
        tipo: req.body.tipo
    }); 
    try {
       const newVino = await vinoadd.save();
       res.json(201);

    } catch(err){
        console.log(err);
    }


}