const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const couponSchema= mongoose.Schema({
    vino: String,
    sconto: Number,
    utenti: []
})

module.exports = mongoose.model('Coupon', couponSchema);