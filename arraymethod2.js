// sorting

let arr=[5,4,3,2,1,6,7,8,9,10];

// It can only sort numbers for string it only considers ASCII value of 1st letter of string

// arr.sort();    // it will sort in ascending order
arr.sort((a,b)=>{
    console.log(a,b)
    // return b-a;// descending
    // It takes 1st two values b=5,a=4
    return a-b;// ascending
});
console.log(arr);


let names=["Aditya","Ojha","Akash","Raj"];
names.sort();
console.log(names);


const products =[
    {product_id:1,product_name:"laptop",price:100000},
    {product_id:2,product_name:"mobile",price:50000},
    {product_id:3,product_name:"tv",price:30000},
    {product_id:4,product_name:"watch",price:10000},
]

// slice makes clone
const lowToHigh=products.slice(0).sort((a,b)=>{
    return a.price-b.price;
})

console.log(lowToHigh);

console.log(products);


// find method

const myArray=["Aditya","Ojha","Akash","Raj"];

const ans=myArray.find((value)=>{
    return value.length===4;
})

console.log(ans);


// Real example
const users=[
    {id:1,name:"Aditya"},
    {id:2,name:"Sanu"},
    {id:3,name:"Kishore"},
    {id:4,name:"Ajay"},
    {id:5,name:"Raj"},
]

// find user with userid 3

const ans1=users.find((user)=>{
    return user.id===3;
});
console.log(ans1.name);


// every method --> True/False

const arr2=[1,2,3,4,5,6,7,8,9,10];
let newArr=arr2.every((num)=>{
    return num%2===0;
});

console.log(newArr);    // False if any one number is not even

// somwe method --> True/False

let newArr1=arr2.some((num)=>{
    return num%2===0;
});
console.log(newArr1); // True if any one number is even


// fill method

let arr3=[1,2,3,4,5,6,7,8,9,10];

arr3.fill(0,2,4);   // fill zero from 2 t0 4
console.log(arr3);  

const arr4=new Array(10).fill(-1);
console.log(arr4);  // fills the whole with -1


// splice method

const arr5=["item1","item2","item3","item4","item5"];

// delete
arr5.splice(2,1);       // index2 i.e item3 and 1 item from index 2 deleted
console.log(arr5);

// insert
arr5.splice(2,0,"item6","item7");       // Insert from 2 and delete 0 items
console.log(arr5);

// it also returns deleted items
// it changes original array
const deleted=arr5.splice(2,2,"item8","item9");
console.log(deleted);
console.log(arr5);