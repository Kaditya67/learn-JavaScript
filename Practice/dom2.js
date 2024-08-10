// // Deal with nodelist

// const boxes = document.querySelectorAll(".box");

// // console.log(boxes[0].textContent);
// // forEach

// boxes.forEach(function (element) {
//     console.log(element.textContent);
// });
// console.log(boxes);


// Deal with htmlCollection

const boxes1 = document.getElementsByClassName("box");
// convert to array
Array.from(boxes1).forEach(function (element) {
    console.log(element.textContent);
})