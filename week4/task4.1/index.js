const { Console } = require("console");

/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
//функция для  копирования коллекции
function listCopy(obj){
    var newObj = [];
    newObj=obj.slice();
    return newObj
}

function query(collection) {
    var newCollection = listCopy(collection);
    
    for (var i = 1; i < arguments.length; i++) {    
       //console.log(arguments[i]);

        if (arguments[i].name === 'filterIn') {
            newCollection = arguments[i](newCollection);
        }
    }

   for (var i = 1; i < arguments.length; i++) {
        //console.log(arguments[i].name);
        if (arguments[i].name === 'select') {
            newCollection = arguments[i](newCollection);
        }
   }
    return newCollection

}


/**
 * @params {String[]}
 */
function select() {
    var margins = arguments;
    //console.log(margins)
    return function select(collection) {
        var selectedCollection = [];
        for (var i = 0; i < collection.length; i++) {
            selectedCollection[i] = {};
            for (let margin of margins) {
                //console.log(Object.keys(collection[i]));//возвращает массив, состоящий из ключей
                //console.log(margin);// возвращает элементы из arguments
                if (Object.keys(collection[i]).includes(margin)) {
                    selectedCollection[i][margin] = collection[i][margin];
                    console.log(selectedCollection[i])
                    console.log(selectedCollection[i][margin]);
                }
            } 
        }
        //console.log(selectedCollection[1]);
        return selectedCollection
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filterIn(collection) {
        var filtredCollection = [];
        for (var i = 0; i < collection.length; i++) {
            if (values.includes(collection[i][property])) {
                filtredCollection.push(collection[i])
            } 
        }
        return filtredCollection
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
