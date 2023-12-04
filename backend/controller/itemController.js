const Product = require('../model/items');

exports.additem = async (req, res) => {
    try {
        const { productName, productType, productDesc, startPrice, productPicture, productPictureLink } = req.body.data;

        const newProduct = new Product({
            productName,
            productType,
            productDesc,
            startPrice,
            productPicture,
            productPictureLink
        });

        // Save the new product to the database
        await newProduct.save();

        // Respond with a success message or the newly created product
        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Failed to add product' });
    }
};

exports.getitem = async (req, res) => {
    console.log("YEs");
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error getting products:', error);
        res.status(500).json({ error: 'Failed to get products' });
    }
}

exports.getData = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error('Error getting product by ID:', error);
        res.status(500).json({ error: 'Failed to get product by ID' });
    }
};

exports.markedmail = async (req, res) => {
    try {
        const emailId = req.params.id;
        const email = await Mail.findById(emailId);

        if (!email) {
            return res.status(404).json({ error: 'Email not found' });
        }

        email.read = true;
        await email.save();

        return res.status(200).json({ message: 'Email marked as read' });
    } catch (error) {
        console.error('Failed to mark email as read:', error);
        return res.status(500).json({ error: 'Failed to mark email as read' });
    }
}

exports.deletemail = async (req, res) => {
    const emailId = req.params.id;

    try {
        const deletedEmail = await Mail.findByIdAndDelete(emailId);

        if (!deletedEmail) {
            return res.status(404).json({ message: 'Email not found' });
        }

        return res.status(200).json({ message: 'Email deleted successfully' });
    } catch (error) {
        console.error('Error deleting email:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

}