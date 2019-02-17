// Jaskiran (300978743)
let express = require('express');
let router = express.Router();

router.get('/projectslist', function(req, res, next) {
    res.render('projects/projectsindex',{
        
        title:"Jaskiran's Project List"
        
    })});

module.exports = router;