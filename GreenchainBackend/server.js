const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for port or default to 5000

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION_STRING + 'GreenChain', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const buyerRoutes = require('./Routes/buyerRoutes'); // Import routes
const validateUser = require('./Routes/validateUser'); // Import routes
const sellerRoutes = require('./Routes/sellerRoutes'); // Import routes
const sellRoutes = require('./Routes/sellRoutes'); // Import routes
app.use('/buyer', buyerRoutes); // Use routes
app.use('/login', validateUser); // Use routes
app.use('/seller', sellerRoutes); // Use routes
app.use('/sell', sellRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));