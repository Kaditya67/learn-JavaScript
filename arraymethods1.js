const numbers=[4,5,6,7];


// passes index and value
numbers.forEach((num)=>console.log(num*2));




// ##################  IMP ##########
// numbers.forEach((value, index, array) => {
    // console.log(value,index,array)
// })

// Array.forEach(function(num,index){
//     console.log(index,num);
// })

const myFunc=(num,index)=>{
    console.log(num,index);
}
numbers.forEach(myFunc);        // myFunc needs two arguments, forEach passes arguments dynamically



const users=[
    {id:1,name:"Aditya"},
    {id:2,name:"Sanu"},
    {id:3,name:"Kishore"},
    {id:4,name:"Ajay"},
]

users.forEach(function(user,index){
    console.log(user.name, user.id);
    console.log("Index is",index);
})



// Map method
// .map((value, index, array) => {})
const number1=[3,4,5,6,7,8,9];

const square=function(num){
    return num*num;
}

const squareNum=number1.map(square); // function is present here


const square2=number1.map((num,index)=>{
    return `${index} : ${num*num}`;  // num*2
});
console.log(squareNum);
console.log(square2);


// map function returns new array

const username=users.map((user)=>{
    return user.name;
})

console.log(username);

// filter odd and even numbers
// .filter((value, index, array) => {})
// filter works with bool true values

const evenNum=number1.filter((num)=>{
    return num%2===0;
})
console.log(evenNum);

const oddNum=number1.filter((num)=>{
    return num%2!==0;
})
console.log(oddNum);



// reduce method
// .reduce((previousValue, currentValue, currentIndex, array) => {}, initialValue)
// const total=number1.reduce(()=>{});

const total=number1.reduce((accumulator,currentValue)=>{
    console.log(`${accumulator} + ${currentValue}`); // accumulator+currentValue;
    return accumulator + currentValue; // accumulator+currentValue;
})
console.log(total);

const userCart=[
    {product_id:1,product_name:"Laptop",price:1000},
    {product_id:2,product_name:"Mobile",price:2000},
    {product_id:3,product_name:"TV",price:3000},
    {product_id:4,product_name:"Watch",price:4000},
]

const total_price=userCart.reduce((accumulator,currentValue)=>{
    return currentValue.price+accumulator;
},0)

// Accumuator will be 0 in start
console.log(total_price);