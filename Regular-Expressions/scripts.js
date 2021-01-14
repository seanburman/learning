// var myRe = /d(b+)d/g;
// var myRe2 = /d(b+)d/g.exec('cdbbdbsbz');
// var myArray = myRe.exec('cdbbdbsbz');
// console.log(/d(b+)d/g.lastIndex);
// console.log(myRe.lastIndex);
// console.log(myRe2.lastIndex);
// console.log(myArray.lastIndex)
// console.log(typeof(myRe))
//console.log('The value of lastIndex is ' + myRe.lastIndex);
//console.log(myRe.lastIndex);
//match = myArray.input.slice(myArray.index, myRe.lastIndex)
//console.log("Found \"" + match + "\" in " + myArray.input);
//console.log(myArray[myArray.index]);

// Try Regular Expression Problems:
// https://regexone.com/problem/matching_decimal_numbers

var regex = /(\d*)x(\d*)/
var input = '1280x720'
var output = regex.exec(input);
console.log(output);

var width = output[1]
var height = output[2]

console.log("Input: " + output[0]);
console.log("Width: " + width);
console.log("Height: " + height);