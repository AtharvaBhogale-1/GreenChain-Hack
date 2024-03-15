const mongoose = require('mongoose');

const sellSchema = new mongoose.Schema({
  username: { type: String, required: true }, // Assuming username is required
  password: { type: String, required: true },
  energyType: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true },
});

const Sell = mongoose.model('Sell', sellSchema, 'seller-deets');

module.exports = Sell;
