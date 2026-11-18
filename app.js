const express = require('express');
const path = require('node:path');
require ('dotenv').config();
var hbs = require ('hbs');



const app = express();
const port = process.env.PORT

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname +'/views/partials', function(err){"Heloe"});

// server static files
app.use(express.static('public'));

// routes node
// app.get('/generic', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'generic.html'));
// });
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Pagina Iniciar',
        content: 'Welcome to pagina Inicair'
    });
});
app.get('/generic', (req, res) => {
    res.render('generic');
});
app.get('/elements', (req, res) => {
    res.render('elements');
});








app.get('/elements', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'elements.html'));
});


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
    console.log('Server is running on port ', port);

});
