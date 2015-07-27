var express = require('express');
var twitterSentiment = require('./../helpers/twitter-sentiment');
var keys = require('./../helpers/keys');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  twitterSentiment.fetchSentiment(keys, function(results){
    console.log(results); // Do whatever with the results
  });
  res.render('index', { title: 'Peckham Check Em' });
});

module.exports = router;
