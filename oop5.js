// Array

const numbers=[1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

const arr=new Array(1,2,3,4,5,6,7,8,9,10);
console.log(arr);
console.log(Array.prototype);       // This Array function has all it's methods in it's prototype
console.log(Object.getPrototypeOf(arr));    // check for available methods on the particular object

const str="Hello";
console.log(Object.getPrototypeOf(str));

function hello(){
    console.log("Hello");
}

console.log(hello.prototype);       // object
// change to array
hello.prototype=[];

console.log(hello.prototype);
hello.prototype.push("Aditya");
console.log(hello.prototype);


// Using class keyword
// class keyword is fake ---> it uses function structure only

class CreateUser{
    constructor(firstName,lastName,age,email){
        // Constructor is called everytime, when object is created
        console.log("User Created");
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }

    about(){
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
    }

    is18(){
        return this.age>=18;
    }
}

const user1=new CreateUser("Aditya","Ojha",22,"a@a.com");
user1.about();
console.log(user1.is18());   // Working

