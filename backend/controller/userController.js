const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

exports.insertusers = async (req, res) => {
    const { email, password } = req.body.dataToSend;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // User with the same email already exists
            res.status(409).send('Email ID is already registered.');
        } else {
            const hashpass = await bcrypt.hash(password, 10);
            await User.create({ email, password: hashpass });
            res.status(201).send('User SignedIn successfully.');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Signing user.');
    }
};

exports.checkusers = async (req, res) => {
    const { email, password } = req.body.formData;
    try {
        const user = await User.findOne({ email });
        console.log(user);

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {

                const token = jwt.sign({ userId: user.id }, 'your_4_secret');

                res.status(200).json({ message: `Login successful`, email: user.email, token });
            } else {
                res.status(401).send('Invalid credentials.');
            }
        } else {
            res.status(401).send('Invalid credentials.');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Logging user.');
    }
};