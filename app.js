const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const contactRouter = require('./routes/contact');
const app = express ();

// const boostrap = Bootstrap();


// app.use(boostrap());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use('/contact', contactRouter); //use the /contact website

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Something I like to do',
    });
});

//get
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: "Contact me, phone number 123123123123",
        submitted: false,
    });
});
//post
app.post('/contact', (req, res) => {
    //send a reply 
    //email
    //text
    //something
    console.log(req.body);
    res.render('contact', {
        title: "Thank you",
        submitted: true,
    });
});

app.listen(PORT, () => {
    console.log(`Listen open http://localhost:${PORT} to views.`)
});
