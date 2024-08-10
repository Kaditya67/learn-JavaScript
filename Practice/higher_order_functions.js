const arr=["1","2","3","4","5"];

// arr.forEach( function(element){
//     console.log(element);
// })

// arr.forEach((element)=>{
//     console.log(element)
// })


// ForEach does not return
// // const arr2=arr.forEach((element)=>{
// //     return element
// // })

// console.log(typeof arr2)



// Map

// const arr4=arr.map(function(element){
//     console.log(element)
//     return element      // map is applied to every element
// })

// console.log(arr4)

// filter

// const arr2=arr.filter(function(element){        // using scope use 'return' keyword
//     console.log(element)
//     // return element
//     return element=="3"
// })

// console.log(arr2);

// arr.filter((element)=> element=="3")    // valid // no need of 'return' keyword



// reduce

arr.reduce((acc,curr)=>{
    console.log(acc,curr)
    return acc*curr
},1)        // Set initial value of acc here