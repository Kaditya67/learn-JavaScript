const rootNode=document.getRootNode();
console.log(rootNode);
console.log(rootNode.childNodes);

const childRootNodes=rootNode.childNodes[0];        // select html node
// console.log(childRootNodes[0]);
// console.dir(childRootNodes[0]);

// childRootNodes.forEach(element => {
//     console.log(element);
// })

const textNodes=childRootNodes.childNodes[0];   // slect subnode
console.log(textNodes);
// console.log(textNodes.parentNode);

console.log(childRootNodes.nextSibling);        // no subling of html node
console.log(textNodes.nextSibling);     // there are some siblings of text node

//count of childnodes

console.log(childRootNodes.childNodes);
// sibling relation

let parentH1=document.querySelector('h1').parentNode;
parentH1.style.backgroundColor="black";
parentH1.style.color="#fff";

let body=parentH1.parentNode;
body.style.backgroundColor="green";

// Direct usage of elements

const body1=document.body;
console.log(body1);


// select div directly

const div1=document.querySelector('.container');
console.log(div1);  

console.log(div1.childNodes);       // includes text elements
console.log(div1.children);         // ignores other elements
