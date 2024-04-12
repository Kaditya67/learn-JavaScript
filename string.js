"use strict";

let firstName="Aditya  ";

console.log(firstName.length);  // counts spaces
console.log(firstName[firstName.length-1]);

console.log(firstName.trim());
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName);

console.log(firstName.slice(0,10));
console.log(firstName.slice(0,firstName.length-1));
console.log(firstName.slice(-5));
console.log(firstName.slice(1,5));


console.log(typeof firstName);
console.log(firstName+"22");


let num=20;
console.log(typeof num);
num="20";
console.log(typeof num);
console.log(typeof +num);  // this plus(+) changes string to number
console.log(Number("four"));    // not valid
console.log(Number("20"));  // valid


let string1="20";
let string2="30";

let newString=string1+string2;  // string
console.log(newString);
console.log(typeof newString);

newString=+string1 + +string2;      // number
console.log(newString);
console.log(typeof newString);


let myName="Aditya";
let age=20;

let aboutMe="My name is "+myName+" and I am "+age+" years old";
console.log(aboutMe);

let aboutMe2=`My name is ${myName} and I am ${age} years old`;
console.log(aboutMe2);


console.log(myName,age,aboutMe,aboutMe2);


// Null

let myVariable=null;
console.log(typeof myVariable); // object --> bug,error

// BigInt
let muNum=1234567890123456789012345678901234567890;  // Number
let myNum=1234567890123456789012345678901234567890n;
let myNUm=BigInt(1234567890123456789012345678901234567890);
console.log(typeof muNum);
console.log(typeof myNum);
console.log(Number.MAX_SAFE_INTEGER);
console.log(BigInt.MAX_SAFE_INTEGER);