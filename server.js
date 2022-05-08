//Dependencies
const express = require("express");
const fs = require("fs");



//  the express server
const app = express();

// port 
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));






// Listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});