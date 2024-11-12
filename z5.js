const _ = require('lodash');

function filterArray(arr, value) {
  return _.filter(arr, (item) => item > value);
}

module.exports = { filterArray }; 

