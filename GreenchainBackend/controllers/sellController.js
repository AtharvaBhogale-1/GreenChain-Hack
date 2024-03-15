// In your sellController.js

const Seller = require('../models/sellerModel'); // Import Seller model

exports.addSell = async (req, res) => {
  try {
    console.log(req.body);
    const { companyName, energyType, quantity, pricing, location, subscription, password } = req.body;
    
    // Check if companyName is provided
    console.log(companyName);
    if (!companyName) {
      return res.status(400).json({ message: 'Company Name is required' });
    }

    // Your other validation logic here...

    const newSeller = new Seller({
      companyName,
      password,
      energyType,
      quantity,
      location,
    });

    await newSeller.save();

    res.status(201).json({ message: 'Sell entry added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};