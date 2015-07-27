/**
 * Created by Alicia on 21/06/2015.
 */

var sentimentAnalysis = require('./sentiment-analysis');
var fetchTweets = require('./fetch-tweets');

var results = [];

//function fetchSentiment(keys, callback){
//    fetchTweets.fetchTweets(keys.twitter, function (twitterResults) {
//        twitterResults = twitterResults.replace(/[^a-zA-Z ]/g, '');     // Get rid of all non-alpha characters
//        if(twitterResults == "" || twitterResults == undefined){ twitterResults = "neutral"} // get rid of blanks
//        sentimentAnalysis.fetchRoutes(twitterResults, keys.HP_API_KEY, function (sentimentResults) {
//            results.push({line: line, sentiments: sentimentResults.aggregate.sentiment, score: sentimentResults.aggregate.score});
//            callback(results);  // All done, call callback
//        });
//    });
//}

function fetchSentiment(keys, callback){
    fetchTweets.fetchTweets(keys.TWITTER_API, function (twitterResults) {
        twitterResults = twitterResults.replace(/[^a-zA-Z ]/g, '');     // Get rid of all non-alpha characters
        if(twitterResults == "" || twitterResults == undefined){ twitterResults = "neutral"} // get rid of blanks
        sentimentAnalysis.fetchRoutes(twitterResults, keys.HP_API_KEY, function (sentimentResults) {
            //console.log(sentimentResults);
            callback(sentimentResults);
        });
    });
}

exports.fetchSentiment = fetchSentiment;







