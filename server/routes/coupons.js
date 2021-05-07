let controller = require('../controller/couponroutes');
const express = require('express');
const router = express.Router();

//Ritorna tutti i coupons
router.get('/', controller.getCoupons);
//Ritorna il coupon corrispondente a quell'id
router.get('/:id', controller.getCouponID);
//inserisce un coupon
router.post('/',controller.saveCoupon);
//aggiorna un coupon
router.patch('/:id', controller.updateCoupon);
//elimina un coupon
router.delete('/:id', controller.getCouponID, controller.deleteCoupon);

module.exports = router;