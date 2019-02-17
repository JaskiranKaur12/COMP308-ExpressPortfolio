// Jaskiran (300978743)
let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contact/conindex',{
        
        title:"Contact Form"
        
    })});

module.exports = router;