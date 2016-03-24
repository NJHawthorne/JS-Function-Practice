

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
console.assert(arrayStrings[1] === 'banana');

// .concat()
var moreArrayStrings = ['fig', 'grapefruit', 'honeydew melon'];
var finalArrayStrings = arrayStrings.concat(moreArrayStrings);
console.assert(finalArrayStrings[7] === 'honeydew melon');

// .indexOf()
console.assert(finalArrayStrings.indexOf('dragonfruit') === 3);

// .split()
var sampleTextArray = sampleText.split(' ');
console.assert(sampleTextArray[0] === 'Lorem');

// .join()
var newSampleText = sampleTextArray.join(' ');
console.assert(typeof newSampleText === 'string');

// .pop()
var lastFruit = finalArrayStrings.pop();
console.assert(!finalArrayStrings[7])

// .push()
finalArrayStrings.push(lastFruit);
console.assert(finalArrayStrings[7] === 'honeydew melon');

// .slice()
var someFruits = finalArrayStrings.slice(0,4);
console.assert(!someFruits[4]);

// .splice()
var cranberryString = finalArrayStrings.splice(2, 1, 'cranberry');
console.assert(cranberryString[0] === 'canteloupe');

// .shift()
var goodbyeApples = finalArrayStrings.shift();
console.assert(finalArrayStrings[0] === 'banana');

// .unshift()
finalArrayStrings.unshift(goodbyeApples);
console.assert(finalArrayStrings[0] === 'apple');

// .filter()
var lessNumbers = arrayNumbers.filter(function(values) {
    if (values < 300){
        return true;
    } else {
        return false;
    }
});
console.assert(lessNumbers.length < arrayNumbers.length);

// .map()
var numbersPlusOneThousand = arrayNumbers.map(function(values) {
    return values+1000;
});
console.assert(numbersPlusOneThousand[0] > 1000);







