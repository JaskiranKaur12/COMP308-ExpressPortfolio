// Jaskiran (300978743)
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Jaskiran's Website"  });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

router.get('/projects', function(req, res, next) {
  res.render('Projects', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
