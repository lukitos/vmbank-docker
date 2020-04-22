var Twit = require('twit');

var T = new Twit({
  consumer_key:         'MpmRp6nNqfxrtiI4phZRqcBvy',
  consumer_secret:      '1Mdl2OCHn7WyEbP9vNb29frjpKP5JoXtKYCaoYdd6Y1eQWeMOU',
  access_token:         '15689199-9xPxG1s75tTluZBbSzggYgijHZwmtwvM2CWNoiL1q',
  access_token_secret:  'T4DbemIqmCCL6dWHTqQeqzGMPAM2Q7lKNAF2MWAQnMkpu',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

const getTweets = (request, response) => {
  T.get('search/tweets', { q: '#banking', count: 5 }, function(err, data, response) {
    var tweetArray=[];
    for (let index = 0; index < data.statuses.length; index++) {
        const tweet = data.statuses[index];
        var tweetbody = {
          'text': tweet.text,
          'userScreenName': "@" + tweet.user.screen_name,
          'userImage': tweet.user.profile_image_url_https,
          'userDescription': tweet.user.description,
        }
        try {
          if(tweet.entities.media[0].media_url_https) {
            tweetbody['image'] = tweet.entities.media[0].media_url_https;
          }
        } catch(err) { }
        tweetArray.push(tweetbody);
    }    
    console.log(tweetArray);
})
 };

 module.exports = {
    getTweets
 };