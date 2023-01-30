// INSTRUCTIONS
// Realise long arithmetic on strings without usage bigInt and libraries for arithmetic
// It should work as string functions
// (you can avoid negative numbers, all numbers will be positive and integer)
// String.plus(string) => string
// String.minus(string) => string 
// String.divide(string) => string
// String.multiple(string) => string

// MY SOLUTION
// I wrote 4 functions: add(), subtract(), divide() and multiply(). Each of them takes two parameters that should be declared as strings.

function add(string, addHowMuch) {
    let number1 = string*1;
    let number2 = addHowMuch*1;
   
    if (typeof string == "string" && typeof addHowMuch == "string") {
         let resultAdd = number1 + number2;
        return resultAdd;
    } else {
        console.log("Please declare both variables using string syntax.");
    }
}

//add("100", "5");

//this works! Now do the same for other math operations.

function subtract(string, subtractHowMuch) {
    let number1 = string*1;
    let number2 = subtractHowMuch*1;
   
    if (typeof string == "string" && typeof subtractHowMuch == "string") {
         let resultSubtract = number1 - number2;
        return resultSubtract;
    } else {
        console.log("Please declare both variables using string syntax.");
    }
}

//subtract("10", "-2");

function divide(string, divideBy) {
    let number1 = string*1;
    let number2 = divideBy*1;

    if (typeof string == "string" && typeof divideBy == "string") {
         let resultDivide = number1 / number2;
        return resultDivide;
    } else {
        console.log("Please declare both variables using string syntax.");
    }
}

//divide("10", "2");

function multiply(string, multiplyBy) {
    let number1 = string*1;
    let number2 = multiplyBy*1;

    if (typeof string == "string" && typeof multiplyBy == "string") {
         let resultMultiply = number1 * number2;
        return resultMultiply;
    } else {
        console.log("Please declare both variables using string syntax.");
    }
}

//multiply("10", "2");