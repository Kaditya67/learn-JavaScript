// // DOM 
// // document object model
// console.log(window.document);
// console.dir(document);


// select element using get Element by Id

console.log(document.getElementById('main-heading'));
console.dir(document.getElementById('main-heading'));
// document.getElementById('main-heading').style.color = 'red';

const mainHeading=document.getElementById('main-heading');


// select element using query selector
console.log(document.querySelector('#main-heading'));   // for id -->  #
const header=document.querySelector('.header');     // for class -->  .
console.log(header)

// It find for the 1st class in the file
// Use querySelectorAll if you want to find multiple classes



// change text and textcontent

console.log(document.getElementById("main-heading").textContent);   // prints the content inside the element
// alter the content

document.getElementById("main-heading").textContent = "Hello World";


// textContent gives all the content even the hidden content
// Use innerText if you want to remove the hidden content

document.getElementById("main-heading").innerText = "Hello World!!";



// change the styles of the element
const getDiv=document.querySelector('div');     // get the 1st div
console.log(getDiv);

getDiv.style.color="red";



// get ans set the attribute of the element
console.log(getDiv.getAttribute('id')); // class name

const getA=document.querySelector('#home'); 
console.log(getA)   // a#home
console.log(getA.getAttribute('id'));
console.log(getA.getAttribute('href'));



getDiv.setAttribute('id','main-heading');
console.log(getDiv.getAttribute('id'));