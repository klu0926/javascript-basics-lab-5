// app.js
import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray, findMaxAndUpperCase } from './arrayModule.js';


// Call the functions and log results (your choice of arguments)
// math
console.log('-----math')
console.log('Add: ', add(5, 3));  // Test your add function
console.log('Subtract', subtract(10, 5)) // Test subtract function
console.log('Multiply: ', multiply(4, 5));  // Test the default export
console.log('')

// string
console.log('-----string')
console.log('Uppercase: ', toUpperCase('hello'));  // Test string manipulation
console.log('Lowercase: ', toLowerCase('HELLO'))
console.log('')

// math + string
console.log('-----math + string')
console.log('Add and Uppercase: ', addAndLogUpper(10, 20)) // Test the new function
console.log('')

// array
console.log('-----array')
console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Test findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray
console.log('')

// array + string
console.log('-----array + string')
console.log('Find Max and Uppercase: ', findMaxAndUpperCase([1, 5, 2, 3]))