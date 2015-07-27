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
    client.get('search/tweets', {q: 'football'/*, geocode: '51.5377625000000,-0.0213097000000,1km'*/}, function (error, tweets, response) {
        var results = [];
        tweets.statuses.forEach(function(eachTweet){
            results.push(eachTweet.text.replace(/[^a-zA-Z ]/g, ''));
        });
        results = uniq(results);
        callback(results);
    });

}


function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

exports.fetchTweets = fetchTweets;