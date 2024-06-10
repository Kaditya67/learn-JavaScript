// Object
// key is string or symbol
const student={
    name:"John",
    age:25,
    city:"New York",
    1:"Let"     // string
}

console.log(student.name);

for (const key in student) {
    console.log(key, typeof key);
}

// console.log(Object.values(student))  // array
for (let iterator of Object.values(student)) {
    console.log(iterator)
}



// #################################
// Map
// Key can be any data type
// get() and set()

const person=new Map()

person.set('firstName',"Aditya");
person.set('age',21);
person.set(1,"one");        // number

console.log(person.get('firstName'));
console.log(person);

for(let key of person.keys()){
    console.log(key, typeof key);
}


// Direct for-of loop  i.e it is iterable
for (const iterator of person) {
    console.log(iterator);      // key-value pair in array form
}

// destructure array directly

for (const [key,value] of person) {
    console.log(key,value);
}


// fill map directly
// Map([[],[],[]])

const people=new Map([
    ['name','Kisan'],
    ['age',22]
])

console.log(people);


// give extra features to object with map

const student2={
    'name':'Student',
    'age':20
}

// using map

const extraInfoStudent2= new Map();
extraInfoStudent2.set(student2,{'hobbies':'reading',
'gender':'male'});

console.log(extraInfoStudent2.get(student2).gender);    // male



// clone objects

const obj1={
    name:"Aditya",
    age:21
}

console.log(obj1);
const obj2=obj1;
obj2["gender"]="male";

console.log(obj1);
console.log(`Does obj1 and obj2 have the same memory ? ${obj1===obj2}`);


// clone objects

const obj3={
    ...obj1,
    gender:"none"
}

console.log(obj3);


const obj4=Object.assign({},obj1);
console.log("obj1"+obj4);