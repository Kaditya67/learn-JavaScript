// create reactElement from html element
const reactElement={
    type:"a",
    props:{
        href:'https://google.com',
        className:"link"
    },
    children:"hello world",
}

function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);

    domElement.innerHTML=reactElement.children;
    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    // Add the children to the dom element
    container.appendChild(domElement);
}


const mainContainer=document.getElementById("root");

customRender(reactElement,mainContainer);
// customRender(<h1>Hello World</h1>,mainContainer)