/**
 * Created by Alicia on 21/06/2015.
 */

var twitter = require('twitter');

function fetchTweets(keys,  callback) {

    var client = new twitter({
        consumer_key: keys.CONSUMER_KEY,
        consumer_secret: keys.CONSUMER_SECRET,
        access_token_key: keys.ACCESS_TOKEN_KEY,
        access_token_secret: keys.ACCESS_TOKEN_SECRET
    });
    client.get('search/tweets', {q: 'until%3A2015-07-19' /*geocode: '51.4714000,0.0625000,5km',*/}, function (error, tweets, response) {
        var results = "";
        tweets.statuses.forEach(function(eachTweet){
            results += eachTweet.text+" \n"
        });
        //if(results.length>500){results = results.substring(1, 500);}
        callback(results);
    });

}

exports.fetchTweets = fetchTweets;