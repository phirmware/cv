const express = require('express');
const app = express();
app.use(express.static(__dirname + '/views'));


app.get('/', (req, res) => {
    res.sendFile('views/index.html');
});

app.listen(3000, () => {
    console.log('Listening @ port 3000');
});
