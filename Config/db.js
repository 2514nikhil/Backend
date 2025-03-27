const mongoose = require('mongoose');
const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/MERN'; // Fallback to local if environment variable is undefined

const connectDb = () => {
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log('Database connection error:', err));
};

module.exports = connectDb;
