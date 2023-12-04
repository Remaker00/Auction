const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productType: {
        type: String,
        required: true,
    },
    productDesc: {
        type: String,
        required: true,
    },
    startPrice: {
        type: Number,
        required: true,
    },

    productPictureLink: {
        type: String,
    },

    productPicture: {
        type: String,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
