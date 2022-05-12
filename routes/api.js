const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require ('fs');

router.get('/notes',(req, res) => {
res.sendFile(path.join(__dirname, '..', 'db', 'db.json'))
}
 );
// this will post the new notes on the left side of the website also will add the id number to each note
router.post('/notes', (req, res) => {
const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4()
}
const savedNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'db', 'db.json'), 'utf8'))
savedNotes.push(newNote)

fs.writeFileSync(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(savedNotes), 'utf8')
res.json(newNote)
});

// this will delete the notes 

router.delete('/notes/:id', (req, res) => {
     
const savedNotes = JSON.parse(fs.readFileSync(path.join (__dirname, '..', 'db', 'db.json'), "utf8"));
const delNotes = savedNotes.filter(note => note.id !== req.params.id)

fs.writeFileSync(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(delNotes), 'utf8');
res.json(delNotes);

});
  

module.exports = router;