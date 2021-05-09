const express = require('express');
const app = express();
const path = require('path');
const connect = require('./database/dbconn');
var helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();
connect();

var corsOpts = {
    "origin": "*",
    "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

if (process.env.state != "production") {
    app.use(cors(corsOpts));
}

app.use(express.json());
//Lato sicurezza
app.use(helmet()); 
app.use(cookieParser());

const viniRoutes = require('./routes/vini');
const ordiniRoutes = require('./routes/ordini');
const couponsRoutes = require('./routes/coupons');
const utentiRoutes = require('./routes/utenti');

app.use('/viniRoutes', viniRoutes);
app.use('/ordiniRoutes', ordiniRoutes);
app.use('/couponsRoutes', couponsRoutes);
app.use('/utentiRoutes', utentiRoutes);

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy","img-src 'self'  https://maps.googleapis.com/ https://maps.gstatic.com/ http://www.w3.org/ connect-src: none");
    return next();
});

app.use(express.static(path.resolve(process.cwd() + '/../client/')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(process.cwd() + '/../client/src/index.html'))
});
app.listen(process.env.PORT, () => console.log("Listening"));