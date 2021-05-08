let controller = require('../controller/couponroutes');
const express = require('express');
const router = express.Router();
let Coupon = require('../models/coupon');

//Ritorna tutti i coupons
router.get('/', controller.getCoupons);
//Ritorna il coupon corrispondente a quell'id
router.get('/:id', controller.getCouponID);
//inserisce un coupon
router.post('/',controller.saveCoupon);
//aggiorna un coupon
router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = {new: true};
        const result = await Coupon.findByIdAndUpdate(id, updates, options);
        res.send(result);
    } catch(error) {
        console.log(error.message);
    }
});
//elimina un coupon
router.delete('/:id', controller.getCouponID, controller.deleteCoupon);

module.exports = router;