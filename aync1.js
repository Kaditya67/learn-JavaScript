// // synchronous  programming vs asynchronous programming

// // In synchronous programming, the code is executed line by line
// // In asynchronous programming, the code is executed line by line but in parallel

// // setTimeOut function  ---> provided by the browser

// // console.log('Before SetTimeOut');
// // const id=setTimeout(() => {
// //     console.log('Inside SetTimeOut');
// // }, 0);                                  // wait for minimum 0s and then execute at the end of file execution
// // console.log('After SetTimeOut');
// // console.log('After SetTimeOut');
// // console.log('After SetTimeOut');
// // console.log('After SetTimeOut');

// // clearTimeout(id);



// // // setInterval function  ---> provided by the browser


// // console.log('Before SetInterval');
// // // const id1=setInterval(() => {
// // //     console.log('Inside SetInterval');    // execute after every 2s and then stop
// // // }, 500);

// // for(let i=0;i<5;i++){
// //     console.log(i);
// // }
// // console.log('After SetInterval');

// const body = document.body;

// const id1 = setInterval(() => {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const rgb = `rgb(${red},${green},${blue})`;
//     body.style.background = rgb;
// }, 1000);

// const stop = document.querySelector('.btn');
// stop.addEventListener('click', () => {
//     clearInterval(id1);
// });


// Callbacks

// function add(num1, num2) {
//     return num1 + num2;
// }

// const printAdd = (num1, num2, callback) => {
//     console.log(callback(num1, num2));
// }

// printAdd(2, 3, add);



// // callback hell        ---> Not recommended (nested callbacks)
// setTimeout(() => {
//     console.log('Inside SetTimeOut');
//     setTimeout(() => {
//         console.log('Inside Inside SetTimeOut');
//     }, 1000);           // This will happpen 1 sec later than the SetTimeOut
// }, 0);
// console.log('After SetTimeOut');


// setTimeout(() => {
//     console.log('1.one');
//     setTimeout(() => {
//         console.log('2.two');
//         setTimeout(() => {
//             console.log('3.three');
//         }, 1000);
//     }, 1000);
// }, 1000);
// console.log('4.four');
// console.log('5.five');


// Pyramid of DOM

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');


function changeTextColor(element, text, color, time, callbackSuccess, callbackFailure) {
    setTimeout(()=>{
    if (element) {
        element.textContent = text;
        element.style.color = color;
        if (callbackSuccess) {
            callbackSuccess();
        }
    } else {
        if (callbackFailure) {
            callbackFailure();
        }
    }
    },time);
}


changeTextColor(heading1,'One','red',1000,()=>{
    changeTextColor(heading2,'Two','green',1000,()=>{
        changeTextColor(heading3,'Three','blue',1000,()=>{
            changeTextColor(heading4,'Four','yellow',1000,()=>{
                changeTextColor(heading5,'Five','purple',1000,()=>{
                    changeTextColor(heading6,'Six','orange',1000,()=>{
                        changeTextColor(heading7,'Seven','brown',1000,()=>{

                        }, () => { console.log('Failed Seven'); })
                    }, () => { console.log('Failed Six'); })
                }, () => { console.log('Failed Five'); })
            }, () => { console.log('Failed Four'); })
        }, () => { console.log('Failed Three'); })
    }, () => { console.log('Failed Two'); })
}, () => { console.log('Failed One'); })