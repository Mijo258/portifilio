// This is a new file for the backend
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/experience', (req, res) => {
    res.sendFile(__dirname + '/experience.html');
});

app.get('/education', (req, res) => {
    res.sendFile(__dirname + '/education.html');
});

app.get('/certifications', (req, res) => {
    res.sendFile(__dirname + '/certifications.html');
});

app.get('/skills', (req, res) => {
    res.sendFile(__dirname + '/skills.html');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
