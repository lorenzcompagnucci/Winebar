const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
let Utente = require('../models/utente');

router.post('/', async (req, res, next) => {
    /*
    Utente.find({email: req.body.email}).exec().then(utente => {
        if (utente.length < 1) {
            return res.status(401).json({message: 'Auth fallita'})
        }
    }).
    catch(errore => {
        res.status(500).json({error: errore});
    })*/
    const email = req.body.email;
    const token = jwt.sign({email: email}, 'secret', {expiresIn: '1h'});
    return res.status(200).json({token: token});
}) 

module.exports = router;