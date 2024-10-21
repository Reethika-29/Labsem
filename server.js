// Importing required modules
const express = require('express');
const path = require('path');

// Creating an instance of Express
const app = express();

// Setting the port
const PORT = process.env.PORT || 3000;

// Serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rotate.html'));
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});