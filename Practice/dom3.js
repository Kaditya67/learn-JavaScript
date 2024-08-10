const val1=document.querySelector('.box')       // parent node

// console.log(val1.children)      // html collection
// console.log(val1.children[0])      // html collection

console.log(val1.childNodes)    // node list
// console.log(val1.childNodes[0])    // node list

// console.log(val1.firstElementChild)
// // console.log(val1)

console.log(val1.nextElementSibling);       // next sibling in the same level
console.log(val1.previousElementSibling);   // previous sibling in the same level


// In nodelist even a line-break and comment is counted as a node


// ############################################################
// create Node

// val1.innerHTML="<h1>Hello World</h1>"       // replace the content
// val1.innerHTML+="<h1>Hello World</h1>"

val1.innerText+="Hello World"            


const node1=document.createTextNode("Hello World");
val1.appendChild(node1)     // This text will be added inside that
console.log(val1.childNodes)    // node list