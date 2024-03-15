const express = require('express');
const router = express.Router();
const Buyer = require('../models/buyerModel'); // Import the Buyer model
const Seller = require('../models/sellerModel');

// Handle login request for buyers and sellers
router.post('/', async (req, res) => {
  const { username, password, userType } = req.body;
  //console.log(userType); // Check if userType is correctly received

  if(userType  === 'buyer'){
    try {
      // Find the buyer by username and password
      const buyer = await Buyer.findOne({ username, password });
      
      if (buyer) {
        // Buyer found, login successful
        res.status(200).json({ message: 'Login successful', buyer });
      } else {
        // Buyer not found, invalid credentials
        res.status(401).json({ message: 'Invalid login credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  else if(userType === 'seller'){ // Fixed "elif" to "else if"
    try {
      // Find the seller by username and password
      const seller = await Seller.findOne({ username, password });
      
      if (seller) {
        // Seller found, login successful
        res.status(200).json({ message: 'Login successful', seller });
      } else {
        // Seller not found, invalid credentials
        res.status(401).json({ message: 'Invalid login credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
});

module.exports = router;