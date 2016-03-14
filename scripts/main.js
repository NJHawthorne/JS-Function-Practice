

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

function forEach(array, callback){
    // YOUR CODE HERE
    var total = 1;
    forEach([1, 2, 3, 4], function(a){ total *= a; });
}

// testing your code with console.assert

// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var sumNumber = 0;
    var args = [].slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        sumNumber += args[i];
    }
    return sumNumber;
    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert(sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var averageNumber = 0;
    var args = [].slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        averageNumber +=args[i];
    }
    averageNumber /= i;
    return averageNumber;
    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert(average(2, 4, 6, 8) === 5 )

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

// .concat()

arrayStrings.concat('fig', ['grapefruit, honeydew melon']);
// .indexOf()

console.log('The word "banana" can be found at the '+arrayStrings.indexOf('banana')+' point in this array. Neat');

// .split()
//I can't find any results for an array method called split(), but I can find a string method for this. Sooooo we going with that.
var separator = ' ';
sampleText.split(separator);
console.log(sampleText);

// .join()

// .pop()

// .push()

// .slice()

// .splice()

// .shift()

// .unshift()

// .filter()

// .map()