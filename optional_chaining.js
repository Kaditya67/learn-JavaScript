let user={
    name:"Raj",
    age:20,
    address:{extact:"Random addresss..."}
}

console.log("user.address  : "+user.address);
console.log("user.address.extact  : "+user.address.extact);

// To prevent error just use -->  ?. 

console.log(user.gender);       //   undefined
// console.log(user.gender.category);       // error
console.log(user.gender?.category);       //  no error else --->  undefined


let someone;        // const is mostly used

// console.log(someone.name);  // error
console.log(someone?.age);  // no error --> undefined