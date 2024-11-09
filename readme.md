# my-lodash-module

This is a simple npm module that uses lodash to filter arrays.

## Installation

To install the module, run the following command:

npm install my-lodash-module


## Usage
javascript
const myModule = require('my-lodash-module');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = myModule.filterArray(numbers, 5);

console.log(filteredNumbers); // Output: [6, 7, 8, 9, 10]


## API

### `filterArray(arr, value)`

This function filters an array of numbers and returns a new array containing only the numbers greater than the specified value.

* `arr`: The array to filter.
* `value`: The value to filter by.

*Example:*

javascript
const myModule = require('my-lodash-module');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = myModule.filterArray(numbers, 5);

console.log(filteredNumbers); // Output: [6, 7, 8, 9, 10]