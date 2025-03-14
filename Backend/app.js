const express = require('express'); 
const app = express();
const cors = require('cors');   
const dbConnect = require('./db/db');   
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello World');
});
dbConnect();

app.use(cors());
// 404 Error Handling for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global Error Handling
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
