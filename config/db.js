const mongoose = require('mongoose');
const MongoDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdbname';
mongoose.connect('mongodb+srv://sujallbazari:Sujal%23%2312345@sujaldb.cdkmzfh.mongodb.net/Book-API?retryWrites=true&w=majority&appName=SUJALDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log('Database connection failed:', err));

module.exports = mongoose.connection;