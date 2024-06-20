// // const btn=document.querySelector('.btn-headline');
// // console.log(btn);
// // console.dir(btn);       // see as an object
// // btn.addEventListener('click',function(){
// //     console.log('clicked');
// //     console.log("This is button : ",this); 
// // })

// // In case of arrow function, this will be window object

// const btn1=document.querySelector('#one');
// // btn1.addEventListener('click',()=>{
// //     console.log('clicked1');
// // })

// const btn2=document.querySelector('#two');
// // btn2.addEventListener('click',function(){
// //     console.log('clicked2');
// // })

// const btn3=document.querySelector('#three');
// // btn3.addEventListener('click',function(e){
// //     console.log('clicked3');
// //     console.log("Some Value from browser...",e);
// //     console.dir(e)
// //     console.log(e.target);
// //     // console.log(e.currentTarget)
// // })



// // keypress

// const body=document.body;
// body.addEventListener('keypress',function(e){
//     console.log("key pressed : ",e.key);
// })



// // Select All Buttons
// const btns=document.querySelectorAll('.my-buttons button');

// // for(let btn of btns){
// //     btn.addEventListener('click',function(){
// //         console.log("I was clicked..!");
// //         console.log(this.textContent);
// //     })
// // }



// // learn button function sequence

// // btns.forEach(btn => {
// //     btn.addEventListener('click',function(){
// //         console.log(this.textContent);
// //         // let i;
// //         // for(i=0;i<1000000001;i++);       // delay
// //         // console.log(i)
// //     })
// // })

// // btn1.addEventListener('click',function(){
// //     this.style.color="grey";        // e.target  ---> this
// //     this.style.backgroundColor="yellow";
// // })



// // generate color 
// function generateColor(){
//     let red=Math.floor(Math.random()*256);
//     let green=Math.floor(Math.random()*256);
//     let blue=Math.floor(Math.random()*256);
//     return `rgb(${red},${green},${blue})`;
// }

// const mid_btn=document.querySelector('.btn-headline');
// mid_btn.addEventListener('click',function(){
//     console.log("clicked");
// })
// mid_btn.addEventListener('mouseover',function(){
//     console.log("Mouse Over occured");
// })
// mid_btn.addEventListener('mouseleave',function(){
//     console.log("Mouse Leave occured");
// })

