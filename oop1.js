// // function inside object/class is method

const personInfo=function(age){
    console.log(`${this.name}`,age);
}

const person={
    name:"Aditya",
    about:personInfo
}


const people={
    name:"Rohan",
    about:personInfo
}
// person.about();
// people.about();

// // console.log(this);       // window object
// // console.log(window);       // window object
// console.log(this===window);     // true  

"use strict"
function myFunc(){
    console.log("this")
    // console.log(this);      // undefined within strict mode
}

myFunc();
myFunc.call();


// call can replace this

// person.about.call();
// person.about.call(person);
// person.about.call(people);

console.log("This is apply");
person.about.apply(person,["19"]);      // add arr in order
console.log("This is bind")
// person.about.bind(person)("Aditya Ojha",19);
const func=person.about.bind(person,  "Aditya Ojha",19);        // about function of person with 2 arguments, It accepts only the required one
func();