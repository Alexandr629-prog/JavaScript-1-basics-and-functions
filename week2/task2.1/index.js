/**
 * @param {String} tweet
 * @returns {String[]}
 */
     module.exports = function (tweet) {
        var words = tweet.split(' ');
    
        var hashtags = [];
    
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
    
            if (word[0] === '#') {
                var hashtag = word.slice(1);

                hashtags.push(hashtag);
            }
        }
        return hashtags;
    };

    

