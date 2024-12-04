
// Read the input file
const input = require('fs').readFileSync('day1_input.txt', 'utf-8');

// The input file are two columns of numbers
const inputArray = input.split('\n').map(line => line.split(' ').filter(line => line !== ''));

// Get two arrays
const array1 = inputArray.map(line => line[0]);
const array2 = inputArray.map(line => line[1]);

if (array1.length !== array2.length) {
    throw new Error('Arrays are not the same length. Please check your input.');
}

// Our goal is to sort the arrays and then sum each array on each index
const sortedArray1 = array1.sort((a, b) => a - b);
const sortedArray2 = array2.sort((a, b) => a - b);

// Sum each array on each index
let sumArray = [];
for (let i = 0; i < sortedArray1.length; i++) {
    sumArray.push(Math.abs(sortedArray1[i] - sortedArray2[i]));
}

console.log("The total distance between the lists is: " + sumArray.reduce((a, b) => a + b));


// Find the similarity score between the lists
const timesAppeared = {}
for (let i = 0; i < array2.length; i++) {
    if (timesAppeared[array2[i]] === undefined) {
        timesAppeared[array2[i]] = 0;
    }

    timesAppeared[array2[i]]++;
}

const similarityArray = sortedArray1.map(element => {
    if (timesAppeared[element] === undefined) {
        return 0;
    }
    return timesAppeared[element] * element;
})
console.log("The similarity score between the lists is: " + similarityArray.reduce((a, b) => a + b));