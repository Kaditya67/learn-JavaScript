// // const todoList=document.querySelector('.todo-list');
// // todoList.insertAdjacentHTML('beforeend','<li>Added Task 2</li>');       // where to add, what to add        // append-->before ending

// // todoList.insertAdjacentHTML('afterend','<li>Added Task 3</li>');      // add at the end

// // todoList.insertAdjacentHTML('afterbegin','<li>Added Task 4</li>');    // add at the beginning
// // todoList.insertAdjacentHTML('beforebegin','<li>Added Task 0</li>');   // add at the beginning before the first element


// // clone nodes

// const ul=document.querySelector('.todo-list');
// const li=document.createElement('li');

// li.textContent='Added Clone task';

// // two operations cannot be performed at the same time
// ul.append(li);      // append selected
// ul.prepend(li);     // changed to prepend selected

// const li3=li.cloneNode();       // clone structure only with no content
// const li2=li.cloneNode(true);       // clone structure and content
// ul.append(li2);


// // old methods

// // insertBefore(li,ul.firstElementChild);
// // appendChild(li);
// // replaceChild(li,ul.firstElementChild);
// // removeChild(ul.firstElementChild);


// live vs static list

// static list is directly added in html 

// live list is added through js

// querySelectorAll is used to get all the elements in static list
// getElementsByClassName is used to get all the elements in live list

const todoList=document.querySelector('.todo-list');        // static list
const listItems=todoList.getElementsByTagName('li');      // live list

const li=document.createElement('li');
li.textContent='Added Clone task';

todoList.append(li);
console.log(todoList);     // static list
console.log(listItems);     // current live list elements


const dimensions=todoList.getBoundingClientRect();
const h=dimensions.height;
console.log(dimensions);
console.log(h);