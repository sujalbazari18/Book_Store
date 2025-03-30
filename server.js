const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');

const app = express();
const Port = process.env.PORT || 5000;

// // Connect to Database
// connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
