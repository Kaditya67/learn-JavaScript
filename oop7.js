class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }   

    // static methods
    static greet(){
        console.log("Hello");
    }

    // static property
    static desc="Person Class";

    // getter and setter
    get details(){       // getter
        return this.age;
    }
    set details(x){       // setter
        return this.age=x;
    }
    details(){       // getter
        return this.age;
    }   
}   
const person1=new Person("Aditya",22);
// console.log(person1.details);   // get details
console.log(person1.details())  // details      // overwritten
person1.details=25;     // set details
console.log(person1.details)

Person.greet();     // static methods

console.log(Person.desc);       // static property