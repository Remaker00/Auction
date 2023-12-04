const express = require('express');
const router = express.Router();

const itemController = require('../controller/itemController');
const bidController = require('../controller/bidController');

router.post('/additems', itemController.additem);
router.get('/getitem', itemController.getitem);
router.get('/getitem/:id', itemController.getData);
router.post('/submitbid/:id', bidController.addbidprice);
router.get('/getbids/:id', bidController.getBidPrices);


module.exports = router;
