// iterables
// jispe for of loop lgaya ja sake

// for eg. String and Array
let name= "Aditya";
for (let char of name) {
    console.log(char);  // prints character by character
}

// array like object
// All those objects who have length property and can be accessed by index are array like objects
// for eg. string

console.log("2nd Index has this character : "+name[2]);



// #####################################
// sets     // it is iterable
// not ordeded, unquie and no index-based accessing

let setNum=new Set([1,2,3,4,5,5,5]);       // pass any iterable in set
console.log(setNum);

setNum.add(6);
setNum.add(7);

let length=0;
for (const i of setNum) {
    console.log(i);
    length++;
}

//length
console.log(length) ``