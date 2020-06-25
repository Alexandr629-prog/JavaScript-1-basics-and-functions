/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {

    function plusZero(x) {
        if (x < 10) {
            x = '0'+ x
        }
        return x
    }
var time=new Date(date);
time={
        years: time.getFullYear(),
        months: time.getMonth(),
        days : time.getDate(),
        hours: time.getHours(),
        minutes: time.getMinutes(),

        add: function(count, parametr){
            var plus = {
                years : (parametr === 'years') ? count:0,
                months : (parametr === 'months') ? count:0,
                days  : (parametr === 'days') ? count:0,
                hours : (parametr === 'hours') ? count:0,
                minutes : (parametr === 'minutes') ? count:0};

            if ((count < 0) || !Object.keys(plus).includes(parametr)) {
                throw new TypeError('Передано неверное значение');
            } else {
                newDate = new Date(this.years + plus.years, this.months + plus.months, this.days + plus.days,
                    this.hours + plus.hours, this.minutes + plus.minutes); 

                this.years = newDate.getFullYear();
                this.months = newDate.getMonth();
                this.days = newDate.getDate();
                this.hours = newDate.getHours();
                this.minutes = newDate.getMinutes();
            };
        return this
        },

        subtract: function(count, parametr){
            var minus = {
                years : (parametr === 'years') ? count:0,
                months : (parametr === 'months') ? count:0,
                days  : (parametr === 'days') ? count:0,
                hours : (parametr === 'hours') ? count:0,
                minutes : (parametr === 'minutes') ? count:0};

            if ((count < 0) || !Object.keys(minus).includes(parametr)) {
                throw new TypeError('Передано неверное значение');
            } else {        
                newDate = new Date(this.years - minus.years, this.months - minus.months, this.days - minus.days,
                    this.hours - minus.hours, this.minutes - minus.minutes); 
       
                    this.years = newDate.getFullYear();
                    this.months = newDate.getMonth();
                    this.days = newDate.getDate();
                    this.hours = newDate.getHours();
                    this.minutes = newDate.getMinutes();
                };
        return this
        }
    };


    Object.defineProperty(time, 'value', {
        get: function() {
          return this.years + '-' + plusZero(this.months+1) + '-'
           + plusZero(this.days) + ' ' + plusZero(this.hours) + ':' + plusZero(this.minutes);
        }
      });
    return time;

    
};

