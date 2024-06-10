function hello(){
    console.log("Hello World");
}


console.log(hello.prototype);       // constructor function
// add key value pair in the function usin prototype
// only functions have the prototype 


hello.prototype.name="Aditya";
hello.prototype.age=22;

hello.prototype.about=function(){
    console.log(`${this.name} is ${this.age} years old`);
}


console.log(hello.prototype);
hello.prototype.about();


// Other than adding functions in function from object, adding in prototype is better

// const userMethods={
//     about:function(){
//         console.log(`First Name: ${this.firstName}`);
//         console.log(`Last Name: ${this.lastName}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`Email: ${this.email}`);
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }

function userInfo(firstName,lastName,age,email){
    // const user=Object.create(userInfo.prototype);
    const user=Object.create(userInfo.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    return user;
}

userInfo.prototype.about=function(){
    console.log(`First Name: ${this.firstName}`);
    console.log(`Last Name: ${this.lastName}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
}

userInfo.prototype.is18=function(){
    return this.age>=18;
}
// This approach is better

const user=userInfo("Aditya","Ojha",22,"a@a.com");
user.about();
console.log(user.is18());   // Working



// New keyword

// user=Object.create(userInfo.prototype);

// 1. this = {}     --> user is replaced with this
// 2. return 
// 3. does the work of chaining with prototype

console.log("This is new keyword working .....")
function CreateUser(firstName,lastName,age,email){      // Starts with capital if we are using new keyword for constructor
   // replaced with this
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.email=email;
    return this;
}

CreateUser.prototype.about=function(){          // adds to function prototype and can be used using this keyword
    console.log(`First Name: ${this.firstName}`);
    console.log(`Last Name: ${this.lastName}`);
}

const user2=new CreateUser("Aditya","Ojha",22,"a@a.com");
console.log(user2);
user2.about();

for(let key in user2){
    // console.log(key);       // all keys
    if(user2.hasOwnProperty(key)){
        console.log(key);
    }  // all values
}