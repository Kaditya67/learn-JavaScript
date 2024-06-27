// promises

function myPromise() {
    const value = true;
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (value) {
                resolve("Promise Resolved1");
            } else {
                reject("Promise Rejected1");
            }
        }, 1000);
    })
}

myPromise().then((message) => {
    console.log("Promise Resolved2");
    console.log("Result: ", message);
    message = "Hello World";
    return message          // returning promise and I can use another 'then'
}).then((data) => console.log(data)).catch(() => {
    console.log("Promise Rejected2");
    console.log("Result: ", message);
})


// Pyramid of DOM to Promises


// Pyramid of DOM

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');


function changeTextColor(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve();
            } else {
                reject();
            }
        }, time);
    })

}


// changeTextColor(heading1, " 1", "red", 1000).then(() => {
//     changeTextColor(heading2, " 2", "green", 1000)}).then(() => {
//         changeTextColor(heading3, " 3", "blue", 1000)}).then(() => {
//             changeTextColor(heading4, " 4", "yellow", 1000)}).then(() => {
//                 changeTextColor(heading5, " 5", "purple", 1000)}).then(() => {
//                     changeTextColor(heading6, " 6", "orange", 1000)}).then(() => {
//                         changeTextColor(heading7, " 7", "brown", 1000)})

changeTextColor(heading1, " 1", "red", 1000)
    .then(() => changeTextColor(heading2, " 2", "green", 1000))
    .then(() => changeTextColor(heading3, " 3", "blue", 1000))
    .then(() => changeTextColor(heading4, " 4", "yellow", 1000))
    .then(() => changeTextColor(heading5, " 5", "purple", 1000))
    .then(() => changeTextColor(heading6, " 6", "orange", 1000))
    .then(() => changeTextColor(heading7, " 7", "brown", 1000));
