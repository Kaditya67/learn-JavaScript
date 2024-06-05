// // callback function

function myfunc2(name){
    console.log("Inside Func2");
    console.log(`${name}`);
}

function myFunc1(name,callback){
    console.log("Inside Func1");
    callback(name);
}

myFunc1("Aditya",myfunc2);


// function add(a,b, callback){    // callback name is convention
//     callback(a,b);
//     return a+b;
// }

// function sub(a,b){
//     console.log(a-b);
// }

// let added=add(5,6,sub);
// console.log(added);

// ######################################
// function returning function

function sub(a,b){
    function add(a,b){
        return a+b;
    }
    function hello(){
        console.log("Hello World");
    }
    console.log(`${a-b} is the difference`);
    return hello;
}

let added1=sub(6,7);
console.log(added1);
added1();


