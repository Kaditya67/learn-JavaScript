class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }   

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age<=1;
    }

    isCute(){
        return true;
    }
}

const animal1=new Animal("tom",2);
console.log(animal1.isCute());
console.log(animal1);

class Dog extends Animal{       // Inheritance
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }

    run(){
        return `${this.name} is running at ${this.speed} km/hr`;
    }

}

const dog1=new Dog("tommy",2,45);
console.log(dog1);
console.log(dog1.run());
console.log(dog1.isCute());
console.log(dog1.isSuperCute());
console.log(dog1.__proto__);


// getter and setter

class Person{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }   
    get details(){        // getter
        return `${this.name} is ${this.age} years old`;
    }
    set details(x){       // setter
        return this.age=x;
    }

    // set methods
    setName(name){
        this.name=name;
    }

    get fullName(){
        return this.name;
    }

    set fullName(name){
        const [firstName,lastName]=name.split(" ");
        this.name=firstName;    
        this.lastName=lastName;
    }
}

const person1=new Person("Aditya",22);
console.log(person1.details);       // get details
person1.details=25;     // set details
console.log(person1.details);
console.log(person1.name);

person1.setName("Rohan");
console.log(person1.name);

person1.fullName="Aditya Ojha";
console.log(person1.fullName)       // name = Aditya