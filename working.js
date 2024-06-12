// Compilation phase    --> early error checking
// Execution phase      -->  global execution context
//                      ---> local execution context
//                      ---> Line by line execution


// In global execution context
// window object is created
// this is window object

// Memory is allocated to all global variables
// function is also stored (not arrow function---> let or const)

console.log(firstName);     // undefined
// var firstName;      // No error but it is global scope


console.log(this);
console.log(window);

// hoisting
console.log(myFunc);    // It is printed
// function declaration ---> directly stored in memory
function myFunc(){
    console.log("Hello World");
}


console.log(myFunc1);       // error(const/ let)        // var---> undefined in function expression
// function expression
var myFunc1=()=>{console.log("Hello World")};


var firstName="Aditya"; // value is assigned

console.log(firstName);


// in let and const
// in global execution context --> variable and function expressions are uninitialized


// Call Stack --->  call stack is used for memory management (tracks function calls)
// Returning value is stored in call stack


// GEC  ---> when function is called --> creates a new execution context(function execution context)
// when function returns  --> function execution context is removed from call stack


let foo="Aditya";   // global variable  at higher scope
console.log(foo);

function getFullName(firstName,lastName){
    console.log(arguments); // shows all arguments of function
    console.log(foo);       // accessible
    let myVar = "Local Context variable";
    console.log(myVar);
    let fullName=firstName+" "+lastName;
    return fullName;
}

// console.log(myVar);     // lexical context  // higher scope cannot access lower scope variable // error 
const fullName=getFullName("Aditya","Ojha");
console.log(fullName);