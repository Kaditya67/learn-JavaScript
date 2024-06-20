// // event bubbling/event propagation     --> 1st and inner to outer
// // event capturing          --> after bubble and outer to inner

const grandparent=document.querySelector('.grandparent');
const parent=document.querySelector('.parent');
const child=document.querySelector('.child');


// // not captured
// child.addEventListener('click',function(e){
//     console.log('child captured');
//     console.log(e.target);
//     // e.stopPropagation();
// })

// parent.addEventListener('click',function(e){
//     console.log('parent captured');
//     console.log(e.target);
//     // e.stopPropagation();
// })



// // captured
// grandparent.addEventListener('click',function(e){
//     console.log('grandparent bubble');
//     console.log(e.target);
//     // e.stopPropagation();
// },true);

// document.body.addEventListener('click',function(e){
//         console.log('body bubble');
//         console.log(e.target);
//         // e.stopPropagation();
// },true)


// // event delegation      > inner div can use the same funtion as outer div

grandparent.addEventListener('click',function(e){
    if(e.target.classList.contains('box')){
        console.log('grandparent');
        console.log(e.target.textContent);
    }
})