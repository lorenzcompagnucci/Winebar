const jwt = require('jsonwebtoken');
const utentiRoutes = require('../routes/utenti');
const express = require('express');
const app = express();

module.exports = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.body.token, 'secret');
        req.utenteData = decoded;
        next();
    } catch(error) {
        return res.status(401).json({message: 'Non sei autenticato'});
    }
}