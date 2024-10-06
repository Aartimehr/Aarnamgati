const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Ensure this path is correct

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Database connection (MongoDB)
mongoose.connect('mongodb://localhost:27017/aarnamgati', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('MongoDB connection error:', error);
});

// Routes
app.use('/api/users', userRoutes); // Use user routes for login/register

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
