// boolean & comparators

let num1=10;
let num2=20;
let num3='10';

console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log(num1!=num2);
console.log(num1==num2);
console.log(num1===num2);   
// == or ===
console.log(num1==num3);    // only value --> not the data type
console.log(num1===num3);       // value and data type must be same



// truthy and falsy values

// false
//       "" // empty string
//       null // null
//       undefined
//       0


// if else

let age=20;

if (age>18){
    console.log("eligible");
}
else{
    console.log("not eligible");
}

let num = 10;

// if(num%2==0){   // only data not the type is checked
if(num%2===0){   // both type and data is checked here
    console.log("even");
}
else{
    console.log("odd");
}