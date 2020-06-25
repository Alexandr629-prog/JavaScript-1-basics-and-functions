// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

module.exports = function (command) {

    var cmd = command.split(' ');
    var nameContact=cmd[0];

    if (cmd[0] == 'SHOW'){

     return showCommand(command);
    }
        if (cmd[0] == 'ADD') {
        return addCommand(command);
        }
         
        if (cmd[0] == 'REMOVE_PHONE') {
            return removeCommand(command);
            
        }
        };
        function addCommand(command) {
            var cmd = command.split(' ');
            var name = cmd[1];
        var number = cmd[2].split(',');
        if(!phoneBook.hasOwnProperty(name)){
        phoneBook[name] = number;
        }
        else {
        number.forEach(function(num) {
        if(!phoneBook[name].hasOwnProperty(num)) {
        phoneBook[name].push(num);
        
        }
        });}
        return phoneBook;
        };

        function removeCommand(command) {
            var cmd = command.split(' ');
            var numberDel = cmd[1];
            
            var k=false;
            for(var name in phoneBook){
                for(var number in phoneBook[name]){
                    if(phoneBook[name][number] == numberDel){
                        if(Object.keys(phoneBook[name]).length == 1){
                            
                             delete phoneBook[name];
                            k=true;
                        }else{
                           phoneBook[name].splice(number,1);
                            k=true;
                        }
                        
                    }
                }
            }
        if(k===false)return false
        else return true;
            
    };
        function showCommand(command) {
            var str = [];
        for(var name in phoneBook){
            str.push(name + ': ' + phoneBook[name].join(', '));
        }
        str.sort();
        return str;
        };
