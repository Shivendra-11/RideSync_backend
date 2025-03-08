const mongoose = require('mongoose');
require('dotenv').config(); 

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((conn) => {
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit with failure
    });
};

module.exports = connectDB;
