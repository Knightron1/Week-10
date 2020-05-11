// Number
/*
javascript uses a 32bit floating point representation for numbers 

in C++ 0.2345 is a float
in JS 0.2345 is a var (eg: var,const,let)

*/

// Math.floor - returns the largest integer less than or equal to a given number. Rounds down to nearest integer

console.log(Math.floor(11.7))

// Math.round - rounds to the nearest integer
console.log(Math.round(1.59))
// Math.ceil - always rounds up to the nearest integer 
console.log(Math.ceil(1.01))

// Math.random() - generates a random value between 0 and 1
console.log(Math.random()*100);

console.log(Math.random()*1000)

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

console.log(getRandomInt(1000));


// Strings
// Can take the index of a string with .charAt()
console.log('Luke'.charAt(3));
// substring logs the characters between (starting index, ending index). Includes starting index but doesnt include 
console.log('VeryBigWords'.substring(2,6))
// Not including an ending index, returns all values from that position till the end of the string
console.log('VeryBigWords'.substring(4))
// .substr returns (starting index, number of characters to return)
console.log('VeryBigWords'.substr(4,4))

var a = 'aaaaa'
var b = 'aaab'
console.log(a < b);

// .indexOf returns position of the matching string 
console.log('WhatTheHeck'.indexOf('H'))

function findInString(x,y){
    return x.indexOf(y)
};

console.log(findInString('Tell me, why do you use the mask', 'k'))

const str = "Hello World is an old way of teaching you to print strings in your console"

var count = 0

var find = str.indexOf('a')

while (find !== -1){
    count++
    find = str.indexOf('a', find+1)
}

console.log(count);

var str1 = 'Name 1, Name 2, Name 3, Name 4, Name 5'
console.log(str1.split(','));
console.log(str1.split(''));

console.log(str1.replace('Name','St'))

// Objects
var Obj = {}
var arr = [1, 2, 3, 4]

Obj.array = arr

console.log(Obj);

// object.propertyname
// object[property]
// Two ways to add properties to objects

Obj.title = 'SDV503'

console.log(Obj);

// Prototype Inheritance

// function exampleClass(){
//     this.firstName = "Ali"
//     this.lastName = function(){
//         console.log(this.firstName)
//     }
// }

// var test = new.exampleClass();

// Arrays are one of the fundamental data types, 
var arrayOne = [1,2,3,4,5]
console.log(arrayOne);
console.log(arrayOne.push(12,15))
console.log(arrayOne);

// .pop removes the last element of an array
// .shift removes the first element of an array

console.log(arrayOne.shift())
console.log(arrayOne[0])

arrayOne.forEach(element => console.log(element));

// scope is where a variable can be accessed from. EG: child scopes can access from parent scopes, but not vice versa
