// function singHappyBirthday(){
//     // console.log("Happy Birthday to you");
//     // console.log("Happy Birthday to you");
//     // console.log("Happy Birthday dear");
//     console.log("Happy Birthday to you");
// }
// singHappyBirthday();


// function twoPlusFour(){
//     return 2+4;
// }
// console.log(twoPlusFour());


// function
// input : array, target (number)

// function findNumber(array,target){
const findNumber = function(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return "Found at index "+i;
        }
    }
    return "Not Found";
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let target=6;
console.log(findNumber(arr, target));



// New function expression
// const, let, var


const singHappyBirthday =  function(){
    console.log("Happy Birthday to you...");
}
singHappyBirthday();

// Most used Arrow function     // ()=> {}

const singHappyBirthday1 =  ()=>{
    console.log("Happy Birthday to you...");
}
singHappyBirthday1();

const sumThree = (a,b,c)=>{
    return a+b+c;
}

console.log(sumThree(1,2,3));

// write in one line

const sumThree1 = (a,b,c)=>a+b+c;
console.log(sumThree1(1,2,3));