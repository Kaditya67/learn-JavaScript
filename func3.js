// callback function

function add(a,b, callback){    // callback name is convention
    callback(a,b);
    return a+b;
}

function sub(a,b){
    console.log(a-b);
}

let added=add(5,6,sub);
console.log(added);


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


