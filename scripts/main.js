

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

var factorailArray = [1, 2, 3, 4], total = 1;

function factorial(multiplyingNumbers) {
    total *= multiplyingNumbers;
}

forEach(factorailArray, factorial);

console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))
var sumNumber = 0, sumArray = [1, 2, 3, 4, 5];

function sum(addingNumbers){
    sumNumber += addingNumbers;
}

forEach(sumArray, sum);

console.assert(sumNumber === 15);

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(meanNumbers){
    var averageNumber = 0;
    var args = [].slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        averageNumber += args[i];
        if(i === args.length - 1) {
            averageNumber /= args.length;
        }
    }
    return averageNumber;
}

console.assert(average(2, 4, 6, 8) === 5);

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var highestNumber = 0;
    var args = [].slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        if (args[i] > highestNumber) {
            highestNumber = args[i];
        }
    }
    return highestNumber;
    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var stringLength = 0;
    for (var i = 0; i < args.length; i++) {
        if (args[i].length > stringLength) {
            stringLength = args[i].length;
        }
    }
    for (var j = 0; j < args.length; j++) {
        if (args[j].length === stringLength) {
            return args[j];
        }
    }
    // .. do something with each element of args
    // YOUR CODE HERE
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

 var arrayStrings = ['canteloupe', 'dragonfruit', 'apple', 'banana', 'eggplant'];
 var arrayNumbers = [18, 399, 5039, 839, 66, 93, 101];
 var sampleText = 'Lorem ipsum Labore dolore voluptate amet ea Duis.';

// .sort()
arrayStrings.sort();
console.log(arrayStrings);

// .concat()
var moreArrayStrings = ['fig', 'grapefruit', 'honeydew melon'];
var finalArrayStrings = arrayStrings.concat(moreArrayStrings);
console.log(finalArrayStrings);

// .indexOf()
console.log('The word "banana" can be found at the '+finalArrayStrings.indexOf('banana')+' point in this array. Neat');

// .split()
console.log(sampleText);
var sampleTextArray = sampleText.split(' ');
console.log(sampleTextArray);

// .join()
var newSampleText = sampleTextArray.join(' ');
console.log(newSampleText);

// .pop()
var lastFruit = finalArrayStrings.pop();
console.log(lastFruit);
console.log(finalArrayStrings);

// .push()
finalArrayStrings.push(lastFruit);
console.log(finalArrayStrings);

// .slice()
var someFruits = finalArrayStrings.slice(0,4);
console.log(someFruits);

// .splice()
var cranberryString = finalArrayStrings.splice(2, 1, 'cranberry');
console.log(finalArrayStrings);
console.log(cranberryString);

// .shift()
var goodbyeApples = finalArrayStrings.shift();
console.log(finalArrayStrings);
console.log(goodbyeApples);

// .unshift()
finalArrayStrings.unshift(goodbyeApples);
console.log(finalArrayStrings);

// .filter()
console.log(arrayNumbers);
var lessNumbers = arrayNumbers.filter(function(values) {
    if (values < 300){
        return true;
    } else {
        return false;
    }
});
console.log(lessNumbers);

// .map()
var numbersPlusOneThousand = arrayNumbers.map(function(values) {
    return values+1000;
});
console.log(numbersPlusOneThousand);







