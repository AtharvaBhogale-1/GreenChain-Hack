const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accountAddress: String,
  privateKey: String
});

const Buyer = mongoose.model('Buyer', buyerSchema, 'buyer-deets'); // Specify collection name

module.exports = Buyer;