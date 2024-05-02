// hoisting

// function declaration  --> Valid
hello();

function hello(){
    console.log("Hello World");
}


// ################## Invalid ##################
// hello1();

// var hello1 = function(){
//     console.log("Hello World1");
// }


// hello2();

// let hello2 = ()=>{
//     console.log("Hello World2");
// }


// function inside function

const app = ()=>{
    const myFunc = ()=>{
        console.log("Hello World");
    }

    const addTwo   = (a,b)=>{
        return a+b;
    }

    console.log("Inside Function");
}



// scopes

// block and function scope
// var is function scope  i.e global
// let and const are block scope i.e local

{   // block
    let firstName="Aditya";
    console.log(`First Name: ${firstName}`);  // console.log(firstName);
    var lastName="Ojha";
}

console.log("Last Name: "+lastName);  // accessible
// console.log(firstName);      // not accessible   // error


// default parameter

const add = (a=10,b=20,...c)=>{
    console.log("Extra Values: "+c);
    console.log(Array.isArray(c));  // true
    return a+b;

}

console.log(add(1,2,3,4,5,6,7,8,9,10));