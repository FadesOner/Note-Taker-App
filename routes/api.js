const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require ('fs');


router.get('/notes',(req, res) => {
res.sendFile(path.join(__dirname, '..', 'db', 'db.json'))
}
 );

router.post('/notes', (req, res) => {
const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid.v4()
}
const savedNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'db', 'db.json'), 'utf8'))
savedNotes.push(newNote)

fs.writeFileSync(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(savedNotes), 'utf8')
res.json(newNote)
    
//    let savedNotes = JSON.parse(fs.readFileSync(path.join (__dirname, '..', 'db', 'db.json'), "utf8"));
//     let newNote = req.body;


//    let uniqueId = (savedNotes.length).toString();
//     newNote.id = uniqueId;
//     savedNotes.push(newNote);


//     fs.writeFileSync('..', 'db', 'db.json', JSON.stringify(savedNotes));

//     res.json(savedNotes);
 });

 // router.delete('');
 router.delete('/api/notes/:id', (req, res) => {
     
    // var savedNotes = JSON.parse(fs.readFileSync(path.join (__dirname, '..', 'db', 'db.json'), "utf8"));
    // var noteID = req.params.id;
    // var newID = 0;

    // savedNotes = savedNotes.filter(currentNote => {

    //     return currentNote.id != noteID;
    // })

    // for (currentNote of savedNotes) {
    //     currentNote.id = newID.toString();
    //     newID++;
    // }

    // fs.writeFileSync('..', 'db', 'db.json', JSON.stringify(savedNotes));
    // return res.json(savedNotes);
  });
  

module.exports = router;