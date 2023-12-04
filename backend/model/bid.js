const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    productId: String,
    bidderInfo: String,
    bidAmount: Number,
});

const Bid = mongoose.model('Bid', bidSchema);

module.exports = Bid;
