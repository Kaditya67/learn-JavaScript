// // const val1=document.getElementById("box-1");
// // const val1=document.getElementById("box-1").id;
// // const val1=document.getElementById("box-1").class;          // undefined   
// // const val1=document.getElementById("box-1").className;


// // const val1=document.getElementById("box-1").getAttribute("class");  // valid
// // const val1=document.getElementById("box-1").getAttribute("id");  // valid

// // use setAttribute to overwrite the value of attribute
// // document.getElementById("box-1").setAttribute("class","red");


// const val1=document.getElementById("box-1"); // valid

// // get the content out of the element
// console.log(val1.textContent)
// console.log(val1.innerHTML)     // with tags

// console.log(val1.innerText)    // without tags and a normal paragraph

// console.log(val1.outerHTML)     // with tags and classes


// querySelector

// const val2=document.querySelector("#box-1");         // select by id
// const val2=document.querySelector(".box");       // select by class
// const val2=document.querySelector("h2");             // select by tag
// const val2=document.querySelector("input[type='text']");        // select input type text only

// console.log(val2)