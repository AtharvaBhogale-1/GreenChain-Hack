const express = require('express');
const router = express.Router();
const buyerController = require('../controllers/buyerController');

router.get('/', buyerController.getBuyers); // Handle GET request to fetch buyer details

module.exports = router;