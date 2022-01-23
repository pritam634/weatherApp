const express = require('express'),
    path = require('path'),
    app = express();
const port = 8000,
    host = "127.0.0.1";

const mainPath = path.join(__dirname, '../public');
    
app.set('view engine', 'hbs');
app.use(express.static(mainPath));
    
app.get("/", (req, res) => {
    res.render('index');
});

app.get("*", (req, res) => {
    res.render('error');
});

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});