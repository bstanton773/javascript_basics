console.log('Hello World')

// Basics of JavaScript

/*
    Multiline Comment in JavaScript

    -- Variable Declarations in JavaScript -- 
    Primitive Data Types: strings, integers, floats, booleans, arrays, objects (aka dictionaries in python)
    Function in JavaScript
    Control Flow in JavaScript (Loops, Conditionals)
*/

// String Variable
var firstName = "Brian";

// Display our value to the javascript console (aka print in python)
console.log(firstName);


// Integer Variable
var someNum = 21;

console.log(someNum);
console.log(typeof(someNum));

// Float Variable
var someFloat = 3.14;

console.log(someFloat);
console.log(typeof(someFloat));

// Boolean Variable
var someBool = true;
var anotherBool = false;

console.log(someBool, anotherBool)


// Array Variable
var someArray = [1, "Brian", 3, true];

console.log(someArray);


// Object Variable
// JSON - JavaScript Object Notation
var someObject = {
    'test': 'This is a  test!',
    'hello': 'Hello World'
}

console.log(someObject);


// 'var' can be redeclared
var myDeclaration = 'Hello World';

myDeclaration = 'Goodbye World';

console.log(myDeclaration);



// JAVASCRIPT HOISTING EXAMPLE
console.log(someRandomString);
var someRandomString = 'This is a random string';
console.log(someRandomString);


// A better way to declare variables is by using 'let' and/or 'const'

let fullName = 'Brian Stanton';
console.log(fullName);

fullName = 'Frank Thomas';
console.log(fullName)

const superHero = 'Spider-Man';
console.log(superHero);

// superHero = 'Batman';
// console.log(superHero)

console.clear()
// BASIC MATH OPERATIONS

// Addition
let sum = 5 + 5; // sum = 10
console.log(sum);
sum += 5; // sum = sum + 5
console.log(sum);

// Subtraction
let diff = 5 - 5; // diff = 0
console.log(diff);
diff -= 5; // diff = diff - 5 
console.log(diff);

// Multiplication
let product = 5 * 5; 
console.log(product);
product *= 5; // product = product * 5
console.log(product)


// Division
let quotient = 5 / 5;
console.log(quotient);
quotient /= 5; // quotient = quotient / 5
console.log(quotient); 

// Floor Division
let x = Math.floor(10/3)
console.log(x)

// Ceiling of a Decimal
let y = Math.ceil(10/3)
console.log(y)

// Modulo
let remainder = 19 % 4;
console.log(remainder);
remainder %= 2;
console.log(remainder);

// Exponents
let square = 5 ** 2;
console.log(square);
square **= 2; // square = square **2
console.log(square); // 625

// Mind Bender
let crazyStuff = square - '4';
console.log(crazyStuff) // A). not defined. B.) 629 C.) 6254 D.) 625+4
console.log(typeof(crazyStuff))

// Mind Bender 2
let moreCrazyStuff = square + parseFloat('4')
console.log(moreCrazyStuff) // A). not defined. B.) 629 C.) 6254 D.) 625+4

// Mind Bender 3
let newFloat = 625;
let crazierStuff = newFloat - '4';
console.log(crazierStuff)


let myString = 'Hello';
let newString = 'World';
console.log(myString + " " + newString);



// JAVASCRIPT USER DEFINED FUNCTIONS

// Regular Named Function
function addNums(){
    let a = 1;
    let b = 2;
    return a + b;
}


console.log(addNums())
// console.log(a)

// Regular Named Function with Parameters
function addNums2(num1, num2){
    return num1 + num2
}

console.log(addNums2(5, 7))

// Variable Named Functions

let addNums3 = function(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2;
}

console.log(addNums3())

// Variable Named Functions with Parameters
let addNums4 = function(num1, num2){
    return num1 + num2
}

console.log(addNums4(11,22))

// ES6+ Arrow Function in JavaScript
let multiplyNums = () => {
    let num1 = 5;
    let num2 = 3;
    return num1 * num2;
};

console.log(multiplyNums())

// Arrow Function with parameters
let subtractNums = (num1, num2) => {
    return num1 - num2;
};

console.log(subtractNums(100, 25));

// Helpful tricks that Arrow functions allow:
// One line function with no return statement

let raisedTo = (num, exp) => num ** exp

console.log(raisedTo(2,5))

// If we only have one parameter, the parentheses () are not necessary
let numPlusTen = num => {
    return num + 10
}

console.log(numPlusTen(13));



// Self-invoking function - aka a function that immediately calls itself
// Do not need to save to variable... did that so we could display in console.

let myNumber = (function (num1){
    let num2 = num1 **2
    console.log(num2);
    return num2
})(5)

console.log(myNumber)


// JAVASCRIPT CONTROL FLOW!

// If statments
// Python : JavaScript
// and : &&
// or : ||

function determineAgeGroup(age){
    if (age < 18){
        return 'Minor';
    } else if (age >= 18 && age < 65){
        return 'Adult';
    } else {
        return 'Senior';
    }
}

console.log(determineAgeGroup(107));


// JavaScript Ternary Operator
//  Syntax (condition) ? valueIfTrue : valueIfFalse

function canIDrink(age){
    return (age >= 21) ? 'Enjoy a cold one' : 'Not so fast!'
}

console.log(canIDrink(17))

// Rewrite the determineAgeGroup with ternary operator
function determineAgeGroup2(age){
    return (age < 18) ? 'Minor' : (age >= 18 && age < 65) ? 'Adult' : 'Senior'
}

console.log(determineAgeGroup2(19));


// Equal to   ==
// Double equal sign means these two VALUES are equal

let aNumber = 21

if (aNumber == 21){
    console.log('These are equal')
};

if (aNumber == '21'){
    console.log('These are also equal')
}

// Equal to  ===
// Triple equal sign means these two VALUES and TYPES are equal
if (aNumber === 21){
    console.log('These are equal')
};

if (aNumber === '21'){
    console.log('These are also equal')
}

// Not Equal To   != (Value Only)
if (aNumber != 12){
    console.log('These are not equal')
}

if (aNumber != '21'){
    console.log('These are not equal as well')
} else {
    console.log('These two actually are equivalent')
}


// Not Equal To  !== (Value and Type)
if (aNumber !== 12){
    console.log('These are not equal')
}

if (aNumber !== '21'){
    console.log('These are not equal as well')
} else {
    console.log('These two actually are equivalent')
}

// Other operators - Greater than (>), Less than (<), Greater than or equal to (>=), Less than or equal to (<=)


// LOOPS IN JAVASCRIPT
// For loop
// syntax -- for (counter; expression; incrementation/decrementation){ code for each loop }

console.clear()

console.log('Loop has started');

for (let i = 0; i <=20; i++){
    console.log(i)
}
console.log('Loop has stopped')


for (let j=20; j > 0; j-=3){
    console.log(j)
}


// While loop

function countWithWhile(){
    let i = 0; // Counter
    while (i >=20){
        console.log(i)
        i ++ // i = i + 1
    }
    console.log('While loop ended')
}

countWithWhile()


// Do While Loop -- Do the first portion AT LEAST ONCE
// If the condition is still true, continue to loop until it is not.

function countWithDoWhile(){
    let i = 0; // Counter
    // Do statement
    do {
        console.log(i)
        i++
    }
    while (i >= 20)
}

countWithDoWhile()


// Looping with arrays and strings

// Create an array of names
let names = ['Jim', 'Alice', 'Frank', 'Bob', 'Mary']

console.log(names)

// Method 1 for looping through an array
for (let i = 0; i < names.length; i ++){
    console.log(i, names[i])
}

// Method 2 for looping through an array - for ... of
for (const name of names){
    console.log(name)
}


// Method 1 for looping through a string
let sentence = 'This is my sentence'

for (let k = 0; k < sentence.length; k++){
    console.log(k, sentence[k])
}


// Method 2 - for ... of
for (const letter of sentence){
    console.log(letter)
}