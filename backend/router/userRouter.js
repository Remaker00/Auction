const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');

router.post('/addUser', UserController.insertusers);
router.post('/checkUser', UserController.checkusers);

module.exports = router;
