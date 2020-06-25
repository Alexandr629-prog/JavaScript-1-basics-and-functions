/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {

    var countHours=Math.floor(interval/60);
    var countMinutes =interval%60;
hours+=countHours;
minutes+=countMinutes;
if(minutes>=60){minutes-=60; hours+=1;}
if(hours>23){hours=hours%24;}
    
if(hours>=10 && minutes>=10) return hours+":"+minutes;
if(hours<10 && minutes<10) return "0"+hours+":"+"0"+minutes;
if(minutes<10)return hours+":"+"0"+minutes;
if (hours<10) return "0"+hours+":"+minutes;
};
