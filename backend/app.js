const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());

const UserRoutes = require('./router/userRouter');
const itemRouter = require('./router/itemRouter');

app.use('/user', UserRoutes);
app.use('/auction', itemRouter);

mongoose.connect("mongodb+srv://nishant:Nish%40nt9@cluster3.4jmbyzr.mongodb.net/Auction_aviation");
const db = mongoose.connection;
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
db.once('open', () => {
    console.log('Connected to MongoDB');
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
