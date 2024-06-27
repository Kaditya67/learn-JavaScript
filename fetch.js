const URL = "https://jsonplaceholder.typicode.com/posts";

// console.log(fetch(URL));


// // Get response
// fetch(URL)
//     .then(response => {
//         console.log(response);
//         return response.json();
//     }).then(data => {
//         console.log(data)
//     });


// fetch(URL,{
//     method:"POST",
//     headers:{
//         "Content-type":"application/json"
//     },
//     body:JSON.stringify({
//         name:"Aditya",
//         age:22
//     })
// }).then(response => {
//     console.log(response);
//     return response.json();
// }).then(data => {
//     console.log(data)
// })


// async await to replace .then

// Get request
// async functions return promises
// use await to resolve promises

async function fetchData() {
    const response = await fetch(URL);
    if(!response.ok){
        throw Error(response.statusText);
    }
    console.log(response);
    const data = await response.json();     // .json returns a promise
    console.log(data);
    return data;
}
// console.log(fetchData())        // promise

fetchData().then((data)=>{
    console.log(data);
})


// const getData = async () => {
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw Error(response.statusText);
//     }
//     const data = await response.json();
//     console.log(data);
// }
// getData()