var express = require('express');

var fetchTweets = require('../helpers/fetch-tweets');
var keys = require('../helpers/keys').TWITTER_API;

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  fetchTweets.fetchTweets(keys, function(results){
    console.log(results);
    res.render('index', {title: 'Thr Pond', tweets: results });
  });



});
module.exports = router;
