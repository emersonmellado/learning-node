const express = require('express')
const path = require('path')
const port = 3000;
const app = express();

//Piece of code to parse body post data
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
//end here

//This is what you use to have multipart form data
const multer = require('multer');
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage });
app.use('/upload', express.static('upload'));
//end here

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/users', upload.single('file'), (req, res) => {
    const filename = req.file.filename;
    const filePath = req.file.path;

    res.send(`
        Your username is: ${req.body.userName} 
        - First name: ${req.body.firstName} 
        - Last name: ${req.body.lastName}
        <br>
        Bio: ${req.body.bio}
        <br>
        Github: ${req.body.gitHub}
        <br>
        Profile picture name: ${filename}
        <br/>
        Image: <img src=${filePath} />
    `)
})

app.listen(port);