// Realise long arithmetic on strings without usage bigInt and libraries for arithmetic
// It should work as string functions
// (you can avoid negative numbers, all numbers will be positive and integer)
// String.plus(string) => string
// String.minus(string) => string 
// String.divide(string) => string
// String.multiple(string) => string

// function convertString() {
//     let a = "100";
//     let b = parseInt(a);
//     console.log("Integer value is" + b);
// }
// convertString();

// //this works


// ///////////////////////////////////////
// function convertString(string) {
//     let number = parseInt(string);
//     console.log("Integer value is " + number);
// }
// convertString("55");

// //this works too

///////////////////////////////////////
//now without parseInt

// function convertToString(string) {
//     let number = string*1;
//     console.log(number);
// }
//convertToString("200");

/////////////////////////////
//try some math

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

add("100", "5");

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

subtract("10", "-2");

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

divide("10", "2");

