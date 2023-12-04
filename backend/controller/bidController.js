const Bid = require('../model/bid');


exports.addbidprice = async (req, res) => {
    try {
        const productId  = req.params.id;
        const { bidderInfo, bidAmount } = req.body;

        // Create a new bid document
        const newBid = new Bid({
            productId,
            bidderInfo,
            bidAmount,
        });

        await newBid.save();

        res.status(201).json({ message: 'Bid submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getBidPrices = async (req, res) => {
    try {
        const productId = req.params.id;

        // Find all bids for the specified product
        const bids = await Bid.find({ productId });


        res.status(200).json({ bids });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};