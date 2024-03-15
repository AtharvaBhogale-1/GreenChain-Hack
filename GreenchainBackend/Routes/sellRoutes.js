const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellController');

// POST request to add new sell entry
router.post('/', sellerController.addSell);

module.exports = router;