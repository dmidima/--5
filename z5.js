const _ = require('lodash');

// Функция для фильтрации массива
function filterArray(arr, value) {
  return _.filter(arr, (item) => item > value);
}

// Пример использования функции (для документации)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = filterArray(numbers, 5);
console.log(filteredNumbers); // Output: [6, 7, 8, 9, 10]

// Экспорт функции
module.exports = { filterArray }; 

