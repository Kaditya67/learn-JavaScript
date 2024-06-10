// "this" is decided on runtime

const person={
    name:"Aditya",
    age:22,
    great:function greet(){
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
    }
}

// ###############################
// this is mistake
// const func=person.greet;     // You need to call here to make "person as this"
// func();      // Here this is "window" object



// #################################################
// Arrow function
// Arrow function takes it's this from surrouding object
// You cannot change the this of arrow function with call or bind
// It selects it's object from one more level up
// Here it is window object

const people = {
    name: "Aditya",
    age: 22,
    great: ()=> {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
    }
}

person.great();
console.log("This is arrow function great : ")
people.great();     // arrow function


const people1 = {
    name: "Aditya",
    age: 22,
    great(){
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
    }
}

console.log("This is normal function great : ")
people1.great();