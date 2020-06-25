var subscribers = [];

module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {

        if (subscribers.indexOf(subscriber) === -1) {
            subscribers.push(subscriber);
        }
        
        var keys = Object.keys(subscriber);
        if (keys.indexOf(event) === -1) {
           subscriber[event] = [];
        }
        subscriber[event].push(handler);
        return this
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (subscribers.indexOf(subscriber) !== -1 && subscriber[event]) {
            var i = subscribers.indexOf(subscriber);
            //console.log(subscribers[i]);
            //console.log(event);
            delete  subscribers[i][event];
            delete subscriber[event];
        }
        return this
    },
    

    /**
     * @param {String} event
     */
    emit: function (event) {
        subscribers.map(function (subscriber) {
            if (subscriber[event]) {
                var handlers = subscriber[event];
                for (var i = 0; i < handlers.length; i++) {
                   handlers[i].apply (subscriber);
                }
            }
        })
        return this
    
    }
};
