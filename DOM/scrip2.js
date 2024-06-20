// // get multiple elements using getElementsByClassName
// // get multiple elements using querySelectorAll


// // they give array like object --> indexing is valid, length
// // const mulItmem1=document.getElementsByTagName("a");    // html collection
// let mulItmem1=document.getElementsByClassName("nav-item");    // html collection
// console.log(mulItmem1);

// // we cannot use forEach on htmlCollection

// // for(let i=0;i<mulItmem1.length;i++){
// //     // console.log(mulItmem1[i]);
// //     mulItmem1[i].style.color="red";
// // }


// // mulItmem1=Array.from(mulItmem1);

// // mulItmem1.forEach(navItem => {
// //     navItem.style.color="red";
// // });



// const mulItmem2=document.querySelectorAll(".nav-item"); // node list
// console.log(mulItmem2);


// mulItmem2.forEach(navItem => {
//     navItem.style.color="red";
// });



// InnerHtml

const headline=document.querySelector(".headline");
console.log(headline);
console.log(headline.innerHTML);

headline.innerHTML="<h1>hello</h1>";
headline.innerHTML+='<button class="btn btn-headline">Learn More</button>';