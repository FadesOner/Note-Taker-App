//Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');
const api = require('./routes/api')
const uuid = require('uuid');

//  the express server
const app = express();

// port 
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);

app.get ('/notes', (req, res) => {
res.sendFile(path.join(__dirname, 'public','notes.html'))
});

app.get('/', (req, res) => {
    
res.sendFile(path.join(__dirname, 'public', 'index.html'))
});



// Listener
app.listen(PORT, () => {
    console.log(`API server is ready on port http://localhost:${PORT}!`);
});
