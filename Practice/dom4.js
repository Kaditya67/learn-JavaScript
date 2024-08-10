// // create element
// appendChild is better than innerHTML

function addLiTags(content){
    const li=document.createElement("li");
    // li.setAttribute("title","my title");
    li.innerHTML=`${content}`;
    document.querySelector(".list").appendChild(li);
}

// // append this element to the parent
// function addOptiTags(content){
//     const li=document.createElement("option");
//     li.appendChild(document.createTextNode(content));           // In this case text is appended and it does not need to traverse the whole DOM
//     document.querySelector(".list").appendChild(li);
// }

addLiTags("this is appended1");
addLiTags("this is appended2");
addLiTags("this is appended3");







// EDITING THE ELEMENTS

const secondLi=document.querySelector(".list li:nth-child(2)");
// secondLi.innerHTML="this is edited";         // easy but not optimal

// create a element and replace simply
const edit=document.createElement("li");
edit.appendChild(document.createTextNode("this is edited"));   // Add value to the element

// replace the element
secondLi.replaceWith(edit)





// DELETE THE ELEMENTS
const thirdLi=document.querySelector(".list li:nth-child(3)");
thirdLi.remove()