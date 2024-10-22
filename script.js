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

  // console.log(testLocal);
  console.log(localVariable);
}

testLocal();

function testLocalAttemptTwo() {
  // This will throw ReferenceError
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

  // You can call Hello here
  Hello();
}

PassVariableIntoFunction();

// This will throw an error - ReferenceError
// Hello();

// End of scope variable

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

// Exercise - Arithmetic Operators
function addTwoNumbers(a, b) {
  const result = a + b;
  console.log("Result - addTwoNumbers: ", result);
  return result;
}

function incrementGivenParameter(param, incrementValue) {
  const result = param + incrementValue;
  console.log("Result - incrementGivenParameter: ", result);
  return result;
}

function multiplyTwoNumber(x, y) {
  const result = x * y;
  console.log("Result - multiplyTwoNumber: ", result);
  return result;
}

const firstFunctionResult = addTwoNumbers(2, 3);
const secondFunctionResult = incrementGivenParameter(4, 1);

multiplyTwoNumber(firstFunctionResult, secondFunctionResult);
