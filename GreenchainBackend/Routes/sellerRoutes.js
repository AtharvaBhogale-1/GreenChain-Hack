const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');

router.get('/', sellerController.getSellers); // Handle GET request to fetch seller details

module.exports = router;
