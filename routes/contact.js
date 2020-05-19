const express = require('express');

const router = express.Router();

//Get /contact
router.get('/', (req, res) => {
    res.render('contact', {
        title:"contact meeeeeeee",
        submitted: false,
    })
})

// router.post('/', (res, req) => {
//     res.render('contact', {
//         title: 'Thank You',
//         submitted: true,
//     })
// })

router.post('/contact', (req, res) => {
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

module.exports = router;