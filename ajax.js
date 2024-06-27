// Basic Theory

// AJAX ---> asynchronous javascript and xml

// web application can send and retrieve data from server using AJAX asynchronously

// 3 ways to create and send request to server:
// 1. xmlHTTPRequest (old)
// 2. Fetch API
// 3. axios

const URL="https://jsonplaceholder.typicode.com/posts";
const xhr=new XMLHttpRequest();
// console.log(xhr);

// console.log(xhr.readyState);

xhr.open("GET",URL);

// console.log(xhr.readyState);
// xhr.onreadystatechange = function () {
    
    
//     // if(xhr.readyState === 4){
//         console.log(xhr.readyState);
//         const response = xhr.response;      // String
//         console.log(response);
//         console.log(typeof response);
//         const data = JSON.parse(response);      // parse string to object back
//         console.log(data);
//         console.log(typeof data);

//     }

// }

xhr.onload = function () {      // it is only excuted when readyState is 4
    console.log(xhr.readyState);
    const response = xhr.response;      // String
    console.log(response);
    console.log(typeof response);
    const data = JSON.parse(response);      // parse string to object back
    console.log(data);

    console.log("4th Data and ID : ",data[3]);
    console.log(data[3].id);
    console.log(typeof data);
}

xhr.onerror = function () {      // it is only excuted when there is network error
    console.log(xhr.readyState);
    console.log(xhr.status);
}


xhr.send();     // necesaary to send
