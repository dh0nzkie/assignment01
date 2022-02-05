var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contacts' });
});
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});
router.get('/', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
module.exports = router;
