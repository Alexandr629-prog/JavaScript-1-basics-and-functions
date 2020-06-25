/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var tagsMap = {};

    var tagsList = [];

    for (var i = 0; i < hashtags.length; i++) {
        
        var hashtag = hashtags[i].toLowerCase();

    
        if (!tagsMap.hasOwnProperty(hashtag)) {
           tagsMap[hashtag] = true;
            tagsList.push(hashtag);
        }
    }
console.log(tagsMap);
    return tagsList.join(', ');
};