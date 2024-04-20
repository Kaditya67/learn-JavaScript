const person = {
    name: "Aditya",
    age: 22,
    hobbies: ["cricket", "music"],
    isMarried: false,
};

// for-in loop
for (let key in person) {
    console.log(key, person[key]);
    console.log(`Key Value pair is :-  ${key} : ${person[key]}`);   // backticks
    if (Array.isArray(person[key])) {
        for(let item of person[key]){
            console.log(item);
        }
    }
}


console.log(Object.keys(person));
const val=Array.isArray(Object.keys(person));
console.log(typeof (Object.keys(person)));
console.log(val);   // It is Array




// computed properties

const name = "Aditya";
const age = 22;

const val1="myvalue1";
const val2="myvalue2";

const obj = {
    [val1]: "Aditya",       // use [] to replace key vaiables
    [val2]: 22,
}


// spread operator

const newArray=[..."string"];
console.log(newArray);


const obj1 = {
    key1: "value1",
    key2: "value2",
}

const ob2={
    key1: "value11",    // will overwrite
    key3: "value3",
    key4: "value4",
}

const newObj={...obj1,...ob2,key5:"value5"};
console.log(newObj);


const strObj={..."Aditya"};     // indexing on Str, Array
// index = key
// str = value
console.log(strObj);