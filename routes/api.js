const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const path = require('path');


router.get('/notes',(req, res) => {
res.sendFile(path.join(__dirname, '..', 'db', 'db.json'))
}
 );


router.post('/api/notes', (req, res) => {
     // TODO: complete this
     
 });

 // router.delete('');


module.exports = router;