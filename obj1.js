// objs are referenced types ( stored in key value pair )
"use strict";
let obj1={
    name:"Aditya",
    age:22

}

console.log(obj1); 

// Accessing values

console.log(obj1.name);
console.log(obj1["age"]);

// Adding key- value pair to obj1

obj1["Work"]="student";
console.log(obj1);

obj1.gender="male";
console.log(obj1);


// dot vs []

obj1["person hobbies"]=["cricket","music"];
// Add the attribute with space
console.log(obj1);

const  key = "email";
obj1[key] = "9x5gG@example.com";    // key will be replaced by  "email" with key value
console.log(obj1);
 

console.log(obj1[key]);
console.log(obj1["email"]);