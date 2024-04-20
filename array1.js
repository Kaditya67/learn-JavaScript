// array is a ordered collection of items
// can contain mixed data types

let Datas=[1,2,3,4,5,6,7,8,9,10,"Aditya","Ojha",null,undefined,true,false];
console.log(Datas);

Datas[3]="Aditya Ojha";
console.log(Datas);
console.log(Datas[14]); // no negative index
console.log(typeof Datas);  // obj
console.log(Array.isArray(Datas));  // number


let array1=["item1","item2"];
let array2=array1;      // Both arrays will be referenced to  same location

console.log("Array1",array1[1]);
console.log(array2[0]);

array1.push("item3");
console.log("After pushing",array1);
console.log("After pushing in array1, Array2 is : ",array2);

console.log("Array1 and Array2 have same address ?",array1===array2);


// How to clone array then
// slice, concat ; spread operator [...array]

let array3=array1.slice(0);
console.log(array3,array1===array3);

let array4=[].concat(array1);
console.log(array4,array1===array4);

let array5 = [...array1];
console.log(array5,array1===array5);

let array6 = array1.slice(0).concat(["item4","item5"]);
console.log(array6,array1===array6);



// for loop in array

console.log("For loop in array");

let fruits=["Apple","Orange","Banana"];

for (let i=0;i<fruits.length;i++){
    console.log(fruits[i].toUpperCase());
}


const fruits1=["Apple","Orange","Banana"];
// it cannot be redefined
// fruits1[0]="Mango";  // not allowed
console.log("While loop in Array");
i=0;
 while(i<fruits1.length){
    console.log(fruits1[i].toLowerCase());
    i++;
 }


// for of loop

for(let fruit of fruits){
    console.log(fruit.toUpperCase());
}


// for index in loop

for(let index in fruits){
    console.log(fruits[index].toUpperCase());
    console.log(index);
}

// array destructuring

const myArrAY = ["vALUE1", "VALUE2", "VALUE3", "VALUE4"];

let Ma1=myArrAY[0];
let Ma2=myArrAY[1];


let [myVar1,myVar2]=myArrAY;    // only single value is sent to each variable
console.log(myVar1,myVar2);

let [myVar3,myVar4, ...myVar6]=myArrAY; // rest values are in myVar6
console.log(myVar6)