console.log("Week 6 - class assignment");

// 1) Scope
// Start of scope variable
const globalVariable = "I am visible globally";

function testGlobal() {
  console.log(globalVariable);
}

testGlobal();

function testLocal() {
  const localVariable = "I am visible only within this function";
  console.log(localVariable);
}

testLocal();

function testLocalAttemptTwo() {
  // When line nr:25 is not inside a comment, the following console.log will throw ReferenceError
  console.log(localVariable);
}

// testLocalAttemptTwo();

function testPassesArgument(anyVariable) {
  console.log(anyVariable);
}

function PassVariableIntoFunction() {
  const myLocalVariable = "I am visible inside  PassVariableIntoFunction";

  testPassesArgument(myLocalVariable);

  function Hello() {
    console.log("Hello from inside a function");
  }

  // You can call Hello function here
  Hello();
}

PassVariableIntoFunction();

// The following line will throw ReferenceError
// Hello();

// // Test Exercises from slide - 3/35
// // Global scope
// const globalVariableGlobalScope = "I am a global scope variable";

// function functionScope() {
//   // Function scope
//   const localScopeFunctionVariable = "I am a function scope variable";

//   if (true) {
//     // Block scope
//     const blockScopeFunctionVariable = "I am a block scope variable";
//   }
// }

// // Output - 1
// console.log("Read global scope variable: ", globalVariableGlobalScope);

// // Output - 2
// // ReferenceError: localScopeFunctionVariable is not defined
// // console.log("Read local scope function variable: ", localScopeFunctionVariable);

// // Output - 3
// // ReferenceError: blockScopeFunctionVariable is not defined
// // console.log("Read block scope function variable: ", blockScopeFunctionVariable);

// // Test Exercises from slide - 4/35 - move console.log inside of functionScope
// // Global scope
// const globalVariableGlobalScope = "I am a global scope variable";

// function functionScope() {
//   // Function scope
//   const localScopeFunctionVariable = "I am a function scope variable";

//   if (true) {
//     // Block scope
//     const blockScopeFunctionVariable = "I am a block scope variable";
//   }

//   // Output - 4
//   console.log("Read global scope variable: ", globalVariableGlobalScope);

//   // Output - 5
//   console.log("Read local scope function variable: ", localScopeFunctionVariable);

//   // Output - 6
//   // ReferenceError: blockScopeFunctionVariable is not defined
//   // console.log("Read block scope function variable: ", blockScopeFunctionVariable);
// }

// functionScope();

// Test Exercises from slide - 5/35 - move console.log inside if condition nested inside of functionScope
// Global scope
const globalVariableGlobalScope = "I am a global scope variable";

function functionScope() {
  // Function scope
  const localScopeFunctionVariable = "I am a function scope variable";

  if (true) {
    // Block scope
    const blockScopeFunctionVariable = "I am a block scope variable";

    // Output - 7
    console.log("Read global scope variable: ", globalVariableGlobalScope);

    // Output - 8
    console.log("Read local scope function variable: ", localScopeFunctionVariable);

    // Output - 9
    console.log("Read block scope function variable: ", blockScopeFunctionVariable);
  }
}

functionScope();
// End of scope variable

// 2) Artithmetic Operators
// Start of Arithmetic Operators
let x = 0;
let y = 10;

// Output - x = 0
console.log(x++);
// Output - x = 1
console.log(x);

// The following 2 lines will output - y = 11
console.log(++y);
console.log(y);

// TODO: Add function to check if passed argument is an integer or a string

// Exercise - Arithmetic Operators - slide 7/35
// 1. Create a function that adds two numbers and return result. Result should be printed in browser developer console.
// 2. Create another function that increments given parameter by 1 and return it. Result should be printed in browser developer console.
// 3. Create a third function that multiplies two numbers and return it. Result should be printed in browser developer console.
// 4. Use the multiplication function passing by parameter the result of the two previous functions with any values.
function addTwoNumbers(a, b) {
  const result = a + b;
  console.log("Result - addTwoNumbers: ", result);
  return result;
}

function incrementGivenParameterWithPassingArgumentValue(param, incrementValue) {
  const result = param + incrementValue;
  console.log("Result - incrementGivenParameterWithPassingArgumentValue: ", result);
  return result;
}

function multiplyTwoNumbers(x, y) {
  const result = x * y;
  console.log("Result - multiplyTwoNumbers: ", result);
  return result;
}

const resultOfAddingTwoNumbers = addTwoNumbers(2, 3);
const resultOfIncrementParameterWithPassingArgumentValue = incrementGivenParameterWithPassingArgumentValue(3, 1);

multiplyTwoNumbers(resultOfAddingTwoNumbers, resultOfIncrementParameterWithPassingArgumentValue);
// End of Arithmetic Operators

// 3) Comparisons - slide 10/35
// Start of Comparison Operators
const letterA = "a";
const number5 = "5";

// The following log - output - true
console.log("Compare letterA with a: ", letterA == "a");
// The following log - output - true
console.log("Compare number5 with 5: ", number5 == 5);
// The following log - output - false
console.log("Compare with strict comparison operator letterA: ", number5 === 5);

const number9 = 9;

// The following log - output - false
console.log("Is number9 not equal to interger value - 9: ", number9 != 9);
// The following log - output - false
console.log("Is number9 not equal to string value - 9: ", number9 != "9");
// The following log - output - true
console.log("Is number9 not equal to string value - 9 using strict comparison operator: ", number9 !== "9");
// The following log - output - false
console.log("Is number9 not equal to integer value - 9 using strict comparison operator: ", number9 !== 9);

// Exercise - Comparison Operators - slide 13/35 - starts
// Let’s create a simple function that returns a boolean result. This function will be the one that decides whether we are going to pass the driving license exam.
// The function will receive one parameter which will be the grade. The function will return a boolean that evaluates if the grade is greater or equal than 60.

let testResultPassOrFail;
function passDrivingLicenseExam(grade, valueToCompareWith) {
  const gradeIsGreaterOrEqualValueToCompareWith = grade >= valueToCompareWith;

  if (gradeIsGreaterOrEqualValueToCompareWith === true) {
    testResultPassOrFail = "PASS";
    console.log(`Grade - ${grade} is greater than or equal to ${valueToCompareWith}. Result - ${gradeIsGreaterOrEqualValueToCompareWith} & You have passed your driving license exam with result - ${testResultPassOrFail}, congrats!`);
  }
  else {
    testResultPassOrFail = "FAIL";
    console.log(`Grade - ${grade} is NOT greater than ${valueToCompareWith}. Result - ${gradeIsGreaterOrEqualValueToCompareWith} & You have NOT passed your driving license exam with result - ${testResultPassOrFail}. Please re-take the exam.`);
  }

  return gradeIsGreaterOrEqualValueToCompareWith;
}

// The following - logs - "Grade - 50 is NOT greater than 60. Result - false & You have NOT passed your driving license exam with result - FAIL. Please re-take the exam."
// passDrivingLicenseExam(50, 60);

// The following - logs - "Grade - 70 is greater than or equal to 60. Result - true & You have passed your driving license exam with result - PASS, congrats!"
// passDrivingLicenseExam(70, 60);


// Now create a function that checks if the variable received is your name or not.
// Bonus point → try to get the input from the user for the function that checks if it is your name

// The following function is to test username is a string, valid value or not.
// ---------------------------------------------------------------
// function validUserNameByPassingArgument(name) {
//   if (typeof name === "string" && name.length === 0) {
//     console.log("The string is empty - from validUserName", name);
//   } else if (name === null) {
//     console.log("The string is null - from validUserName", name);
//   } else if (name === undefined) {
//     console.log("The string is undefined - from validUserName", name);
//   } else {
//     console.log("The string is not empty, null or undefined - from validUserName", name);
//     console.log(`Hello ${name} from validUserName`);
//     alert(`Hello ${name}`);
//   }
//   return name;
// }

// function getUserNameByPassingArgument(name) {
//   const userName = validUserNameByPassingArgument(name);
//   return userName;
// }

// The following - logs - "Hello Test username from validUserName"
// getUserNameByPassingArgument("Test username");

// The following - logs - "The string is empty - validUserName"
// getUserNameByPassingArgument("");

// The following - logs - "The string is undefined - from validUserName undefined"
// getUserNameByPassingArgument();

// The following - logs - "The string is not empty, null or undefined - from validUserName Jack"
// The following - logs - "Hello Jack from validUserName"
// The following - Alerts - Hello Jack
// getUserNameByPassingArgument("Jack");
// ---------------------------------------------------------------

const storedUserName = "Jane Doe";

function getUserNameByPrompting() {
  const userName = prompt("Please enter your name");
  return userName;
}

function validUserName() {
  let validName = getUserNameByPrompting();
  let isValid = false;

  while (isValid === false) {
    if (typeof validName === "string" && validName.length === 0) {
      console.log("The string is empty - from validUserName", validName);
      alert(`Input field is empty. Please enter your name.`);
      result = false;
      validName = getUserNameByPrompting();
    } else if (validName === null) {
      console.log("The string is null - user clicking on cancel button on Prompt - from validUserName", validName);
      alert(`You are clicking on cancel button. Please enter your name.`);
      result = false;
      validName = getUserNameByPrompting();
    } else if (validName === undefined) {
      result = false;
      console.log("The string is undefined - from validUserName", validName);
      validName = getUserNameByPrompting();
    } else {
      isValid = true;
      console.log(`The string is not empty, null or undefined - from validUserName. Hello ${validName} from validUserName`);
      alert(`Hello ${validName}`);
    }
  }
  return validName;
}

function getUserName() {
  let newName = validUserName();
  return newName;
}

function checkUserNameMatchesWithStoredUserName(givenUserNameValue, storedUserNameValue) {
  const result = givenUserNameValue === storedUserNameValue;
  if (result) {
    console.log(`Given user name - "${givenUserNameValue}" matches with stored user name - "${storedUserNameValue}"`);
    return result;
  }

  console.log(`Given user name - "${givenUserNameValue}" does NOT match with stored user name - "${storedUserNameValue}"`);
}

// IMP: Uncomment the following 2 lines to test checkUserNameMatchesWithStoredUserName
// const getAndStoreUserNameUsingPrompt = getUserName();
// checkUserNameMatchesWithStoredUserName(getAndStoreUserNameUsingPrompt, storedUserName);

// TODO - home assignment - add input field on HTML and get input value and compare with stored user name

// Exercise - Comparison Operators - slide 13/35 - ends
// ----------------------------------------------

// Start of Logical Operators
// 4) Logical Operators - slide 15/35
// Exercise 1 - slide 18/35

const numberSeven = 7;
const numberTwo = 2;

const testUsingLogicalAndOperator = numberSeven < 10 && numberTwo > 1;

// The following - logs - "testUsingLogicalAndOperator - 7 < 10 && 2 > 1:  - result: true"
console.log(`testUsingLogicalAndOperator - ${numberSeven} < 10 && ${numberTwo} > 1:  - result: ${testUsingLogicalAndOperator}`);

const numberSix = 6;
const numberThree = 3;

const testUsingLogicalOrOperator = numberSix == 5 || numberThree == 5;

// The following - logs - "testUsingLogicalOrOperator - 6 == 5 || 3 == 5:  - result: false"
console.log(`testUsingLogicalOrOperator - ${numberSix} == 5 || ${numberThree} == 5:  - result: ${testUsingLogicalOrOperator}`);

const numberFour = 4;
const numberNine = 9;

const testUsingLogicalNotOperator = !(numberFour == numberNine);

// The following - logs - "testUsingLogicalNotOperator - !(4 == 9):  - result: true"
console.log(`testUsingLogicalNotOperator - !(${numberFour} == ${numberNine}):  - result: ${testUsingLogicalNotOperator}`);
// ---------------------------------------------------------------

// Exercise 2 - slide 19/35
// Let’s create a stricter function for approving the drivers license. We already had that the grade should be greater than 60.
// How about adding that the quantity of classes missed is less than 2.

const zeroMissedClasses = 0;
function checkMissedDrivingLicenseClasses(missedDrivingLicenseClasses, limitToMissDrivingLicenseClasses) {
  // const result = missedDrivingLicenseClasses < limitToMissDrivingLicenseClasses;
  const isMissedDrivingLicenseClassesLessThanLimitToMissDrivingLicenseClasses = missedDrivingLicenseClasses < limitToMissDrivingLicenseClasses;
  const isMissedDrivingLicenseClassesIsStrictlyEqualsToZero = missedDrivingLicenseClasses === zeroMissedClasses;
  const result = (isMissedDrivingLicenseClassesLessThanLimitToMissDrivingLicenseClasses) || (isMissedDrivingLicenseClassesIsStrictlyEqualsToZero);

  if ((isMissedDrivingLicenseClassesIsStrictlyEqualsToZero)) {
    console.log(`Missed driving license classes - ${missedDrivingLicenseClasses} is strict equals to - ${zeroMissedClasses}. Result - ${result}`);
  }
  else if (isMissedDrivingLicenseClassesLessThanLimitToMissDrivingLicenseClasses) {
    console.log(`Missed driving license classes - ${missedDrivingLicenseClasses} is less than limit to miss driving license classes - ${limitToMissDrivingLicenseClasses}. Result - ${result}`);
  }
  else {
    console.log(`Missed driving license classes - ${missedDrivingLicenseClasses} is NOT less than limit to miss driving license classes - ${limitToMissDrivingLicenseClasses}. Result - ${result}`);
  }

  return result;
}

// The following - logs - "Missed driving license classes - 1 is less than limit to miss driving license classes - 2. Result - true"
// checkMissedDrivingLicenseClasses(1, 2);

// The following - logs - "Missed driving license classes - 0 is strict equals to - 0. Result - true"
// checkMissedDrivingLicenseClasses(0, 2);

// The following - logs - "Missed driving license classes - 3 is NOT less than limit to miss driving license classes - 2. Result - false"
// checkMissedDrivingLicenseClasses(3, 2);

// Exercise 2 - slide 19/35
// Now let’s make it even more complex.
// Apart from the above condition, you can also pass the exam, if you have not missed any class and your grade is higher than 45.

function passDrivingLicenseExamUsingLogicalANDoperator(grade, compareGradeValueWith, missedDrivingLicenseClasses, limitToMissDrivingLicenseClasses) {
  const result = passDrivingLicenseExam(grade, compareGradeValueWith) && checkMissedDrivingLicenseClasses(missedDrivingLicenseClasses, limitToMissDrivingLicenseClasses);

  if (missedDrivingLicenseClasses === zeroMissedClasses) {
    console.log("Result: - p", testResultPassOrFail, result);
    console.log(`Your grade value - ${grade} is compared to ${compareGradeValueWith} & your missedDrivingLicenseClasses - ${missedDrivingLicenseClasses} is checked with zeroMissedClasses value - ${zeroMissedClasses} or your missedDrivingLicenseClasses are less than limitToMissDrivingLicenseClasses value - ${limitToMissDrivingLicenseClasses}. Logical operator result - ${passDrivingLicenseExam(grade, compareGradeValueWith)} && ${checkMissedDrivingLicenseClasses(missedDrivingLicenseClasses, limitToMissDrivingLicenseClasses)} = true, your result is - ${testResultPassOrFail}`);
  }
  else if (result) {
    console.log("Result: - p", testResultPassOrFail, result);
    console.log(`Your grade value - ${grade} is compared to ${compareGradeValueWith} & your missedDrivingLicenseClasses - ${missedDrivingLicenseClasses} is checked with ${limitToMissDrivingLicenseClasses}. Logical operator result - ${passDrivingLicenseExam(grade, compareGradeValueWith)} && ${checkMissedDrivingLicenseClasses(missedDrivingLicenseClasses, limitToMissDrivingLicenseClasses)} = true, your result is - ${testResultPassOrFail}`);
  }
  else {
    console.log("Result: - f", testResultPassOrFail, result);
    console.log(`Your grade value - ${grade} is compared to ${compareGradeValueWith} && your missedDrivingLicenseClasses - ${missedDrivingLicenseClasses} is checked with ${limitToMissDrivingLicenseClasses}. Logical operator result - ${passDrivingLicenseExam(grade, compareGradeValueWith)} && ${checkMissedDrivingLicenseClasses(missedDrivingLicenseClasses, limitToMissDrivingLicenseClasses)} = false, your result is - ${testResultPassOrFail}`);
  }

  return result;
}

// The following,
// passDrivingLicenseExamUsingLogicalANDoperator(70, 45, 1, 2);

// logs,
// - "Result: - p PASS true"
// - "Grade - 70 is greater than or equal to 45. Result - true & You have passed your driving license exam with result - PASS, congrats!"
// - "Missed driving license classes - 1 is less than limit to miss driving license classes - 2. Result - true"
// - "Your grade value - 70 is compared to 45 & your missedDrivingLicenseClasses - 1 is checked with 2. Logical operator result - true && true = true, your result is - PASS"


// The following,
// passDrivingLicenseExamUsingLogicalANDoperator(45, 45, 0, 2);

// logs,
// - "Result: - p PASS true"
// - "Grade - 45 is greater than or equal to 45. Result - true & You have passed your driving license exam with result - PASS, congrats!"
// - "Missed driving license classes - 0 is strict equals to - 0. Result - true"
// "Your grade value - 45 is compared to 45 & your missedDrivingLicenseClasses - 0 is checked with zeroMissedClasses value - 0 or your missedDrivingLicenseClasses are less than limitToMissDrivingLicenseClasses value - 2. Logical operator result - true && true = true, your result is - PASS"

// logs,
// - "Result: - p PASS true"
// - "Grade - 70 is greater than or equal to 45. Result - true & You have passed your driving license exam with result - PASS, congrats!"
// - "Missed driving license classes - 1 is less than limit to miss driving license classes - 2. Result - true"
// - "Your grade value - 70 is compared to 45 & your missedDrivingLicenseClasses - 1 is checked with 2. Logical operator result - true && true = true, your result is - PASS"


// The following,
// passDrivingLicenseExamUsingLogicalANDoperator(35, 45, 1, 2);

// logs,
// - "Result: - f FAIL false"
// - "Grade - 35 is NOT greater than 45. Result - false & You have NOT passed your driving license exam with result - FAIL. Please re-take the exam."
// - "Missed driving license classes - 1 is less than limit to miss driving license classes - 2. Result - true"
// - "Your grade value - 35 is compared to 45 && your missedDrivingLicenseClasses - 1 is checked with 2. Logical operator result - false && true = false, your result is - FAIL"

// End of Logical Operators
// ---------------------------------------------------------------

// Start of conditions - if - else, switch condition - slide 22/35

// Exercise - if - else condition
function checkValueEvenOrOdd(value) {
  const result = value % 2 == 0;

  if (result) {
    console.log(`The value - ${value} is an even value & the result is ${result}`);
  }
  else {
    console.log(`The value - ${value} is an ODD value & the result is ${result}`);
  }

  return result;
}

// The following - logs - "The value - 3 is an ODD value & the result is false"
// checkValueEvenOrOdd(3);

// The following - logs - "The value - 4 is an even value & the result is true"
// checkValueEvenOrOdd(4);

// Exercise - if - else if - else condition - slide 28/35
// Now let’s create a function that calculates the shipment cost for our order.
// If the order is lower than 10, the shipment cost is 50.
// In the other case it is free. Console log each case.

// Now, extend the function so that the shipment cost is 30 if the order is higher than 10 and lower than 100.
// Bonus point → extend the counter exercise to display a different message if the number is even. Also add a message if the number is bigger than 15.

let shipmentCost;
function calculateShipmentCost(orderValue) {
  const value10 = 10;
  const value15 = 15;
  const value100 = 100;
  const shipmentCostForOrderValueLessThan10 = 50;
  const shipmentCostForOrderValueHigherThan10AndLowerThan100 = 30;
  const freeOfCost = 0;
  checkValueEvenOrOdd(orderValue);


  if (orderValue < value10) {
    shipmentCost = shipmentCostForOrderValueLessThan10;
    console.log(`Order value - ${orderValue} & You have to pay - ${shipmentCost}`);
  }
  else if (orderValue > value15) {
    console.log(`Order value - ${orderValue} is bigger than ${value15}`);
  }
  else if (orderValue >= value10 && orderValue < value100) {
    shipmentCost = shipmentCostForOrderValueHigherThan10AndLowerThan100;
    console.log(`Order value - ${orderValue} is between ${value10} and ${value100} & You have to pay - ${shipmentCost}`);
  }
  else {
    shipmentCost = freeOfCost;
    console.log(`Order value - ${orderValue} is higher than ${value100} & shipmentCost is ${shipmentCost}. Free shipment!`);
  }

  return shipmentCost;
}

calculateShipmentCost(8);
calculateShipmentCost(18);
calculateShipmentCost(180);
calculateShipmentCost(1);

// Exercise - Switch statement - slide 32/35
// Create a function that receives a name and tells you which family member it belongs to.

let displayFamilyMemberName;
function checkAndPrintFamilyMember(name) {
  const fatherName = "Father";
  const motherName = "Mother";
  const sisterName = "Sister";
  const defaultName = "You are not in my family";

  switch (name) {
    case motherName: {
      console.log(`${name} You are in my family! You are my ${motherName}`);
      // Use the following 2 lines, if you do not use return statement
      // displayFamilyMemberName = motherName;
      // break;
      return displayFamilyMemberName = motherName;
    }
    case fatherName: {
      console.log(`${name} You are in my family! You are my ${fatherName}`);
      // Use the following 2 lines, if you do not use return statement
      // displayFamilyMemberName = fatherName;
      // break;
      return displayFamilyMemberName = fatherName;
    }
    case sisterName: {
      console.log(`${name} You are in my family! You are my ${sisterName}`);
      // Use the following 2 lines, if you do not use return statement
      // displayFamilyMemberName = sisterName;
      // break;
      return displayFamilyMemberName = sisterName;
    }
    // Use the following default statement, if you do not use return statement on the above cases
    default: {
      console.log(`${name} - ${defaultName}`);
      return displayFamilyMemberName = defaultName;
    }
  }
}

checkAndPrintFamilyMember("Mother");
checkAndPrintFamilyMember("Test");
checkAndPrintFamilyMember("Sister");
checkAndPrintFamilyMember("sister");
checkAndPrintFamilyMember(40);
// End of conditions - if - else if - else & switch statement
