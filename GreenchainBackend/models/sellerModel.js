const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  energyType: String,
  quantity: Number,
  price: Number,
  location: String
});

const Seller = mongoose.model('Seller', sellerSchema, 'seller-deets');

module.exports = Seller;