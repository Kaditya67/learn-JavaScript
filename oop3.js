// Traditional Way of defining an Object and simulating them as classes.

const userMethods={
    about:function(){
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Age: ${this.age}, Email: ${this.email}`
    },
    is18:function(){
        return this.age>=18;
    }
}
function createUser(firstName,lastName,age,email){
    // const user={};
    const user=Object.create(userMethods);
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    // user.about=function(){
    //     console.log(`First Name: ${this.firstName}`);
    //     console.log(`Last Name: ${this.lastName}`);
    //     console.log(`Age: ${this.age}`);
    //     console.log(`Email: ${this.email}`);
    // }
    // user.is18=function(){
    //     return this.age>=18;
    // }
    // Use reference  to save memory


    // // ########################## Skip this using Object.create() ##########################
    // user.about=userMethods.about;       // reference is stored in case of functions
    // user.is18=userMethods.is18;

    return user;
}

const user1=createUser("Aditya","Ojha",22,"N8qFP@example.com");
console.log(user1.about()); 
console.log(user1.is18());  

const user2=createUser("Shivam","Pandey",16,"N8qFP@example.com");
console.log(user2.about());

// ########################### Inheritence ###########################
const obj1 = {
    key1: "Value1",
    key2: "Value2",
    key3: "Value3",
};

// Create obj2 using Object.create      //  __proto__ or  [[Prototype]]         --> same
const obj2 = Object.create(obj1);
console.log(obj2.__proto__);
obj2.key4 = "Value4";
obj2.key5 = "Value5";
obj2.key3 = "Unique 3";  // This will override the key3 from obj1 in the context of obj2
console.log(obj2.__proto__===obj1); // true

console.log(obj2.key1); // "Value1" (inherited from obj1)
console.log(obj2.key2); // "Value2" (inherited from obj1)
console.log(obj2.key3); // "Unique 3" (overridden in obj2)
console.log(obj2.key4); // "Value4" (own property of obj2)
console.log(obj2.key5); // "Value5" (own property of obj2)

