// const div1 = document.querySelector(".box-1");

// // Using the onclick property
// // div1.onclick = () => {
// //     alert("clicked from onclick");
// // };

// // Using addEventListener
// div1.addEventListener("click", (e) => {
//     console.log("clicked from inner div");
//     console.log(e);
//     console.dir(e.srcElement);

//     // get parent element
//     // console.log(e.target.parentElement);
//     console.log(e.target.parentNode);
// },);


// div2=document.querySelector(".box-wrapper");

// // div2.addEventListener("click", (e) => {
// //     console.log("Upper Div");
// //     console.log(e.target);
// //     e.stopPropagation();        // stops bubbling
// // },true);

// // default: goes from inner to outer 
// // true: goes from outer to inner


// // type, timeStamp, defaultPrevented
// // target, toElement, srcElement, currentTarget
// // clientX,clientY, screenX, screenY
// // altkey, ctrlKey, shiftKey, keyCode, charCode


document.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    console.log(e.target.parentNode);
    if(e.target.tagName === 'P'){
        e.target.remove();
    }
})

const INTERVAL = 3000;
const RED_DELAY = 1000;
const GREEN_DELAY = 2000;

// Function to change background color to red
function changeToRed() {
    document.body.style.backgroundColor = 'red';
}

// Function to change background color to green
function changeToGreen() {
    document.body.style.backgroundColor = 'green';
}

// Main function to handle the color changes
function startColorChange() {
    const redTime=setTimeout(changeToRed, RED_DELAY);
    const greenTime=setTimeout(changeToGreen, GREEN_DELAY);
}

// clearTimeout(redTime);               // it needs reference
setInterval(startColorChange, INTERVAL);
