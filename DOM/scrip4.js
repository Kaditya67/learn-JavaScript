const sectionTodo=document.querySelector('.section-todo');
// console.log(sectionTodo);

// console.log(sectionTodo.children);
// console.log(sectionTodo.classList);

// sectionTodo.classList.add('bg-dark');

// sectionTodo.classList.remove('container');

// console.log(sectionTodo.classList.contains('bg-dark'));

// sectionTodo.classList.toggle('bg-dark');        // removes if present and adds if absent

// console.log(sectionTodo.classList.contains('bg-dark'));


// // Bad Practice
// let todoList=document.querySelector('.todo-list');
// console.log(todoList);
// console.log(todoList.childNodes);
// todoList.innerHTML+='<li>Added Task 2</li>';


// // Better practice
// const newTodo=document.createElement('li');     // creates li tag
// newTodo.textContent='Added Task 2';

// const todoList=document.querySelector('.todo-list');
// todoList.append(newTodo);

// const removeTodo=document.querySelector('.todo-list li');
// removeTodo.remove();


//Before and After

const newTodoItem=document.createElement('li');
// newTodoItem.textContent='Added Task 3';
const todo1=document.createTextNode('Added Task 3');
// newTodoItem.appendChild(todo1);     // Old
newTodoItem.append(todo1);     // New

const todoList=document.querySelector('.todo-list');
// todoList.append(newTodoItem);

// todoList.before(newTodoItem);        // outside and before todo-list
// todoList.after(newTodoItem);         // outside and after todo-list