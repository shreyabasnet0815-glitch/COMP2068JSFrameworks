var express = require('express');
var router = express.Router();

/* Home page */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: "Shreya's Favourite TV Shows" 
  });
});

/* Money Heist page */
router.get('/money-heist', function(req, res, next) {
  res.render('moneyheist', { 
    title: 'Money Heist' 
  });
});

/* Alice in Borderland page */
router.get('/alice-in-borderland', function(req, res, next) {
  res.render('alice', { 
    title: 'Alice in Borderland' 
  });
});

/* The Boys page */
router.get('/the-boys', function(req, res, next) {
  res.render('theboys', { 
    title: 'The Boys' 
  });
});

/* Stranger Things page */
router.get('/stranger-things', function(req, res, next) {
  res.render('strangerthings', { 
    title: 'Stranger Things' 
  });
});

module.exports = router;