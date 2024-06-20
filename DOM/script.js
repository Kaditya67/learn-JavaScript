const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector('.form-todo input[type="text"]');
const todoList = document.querySelector('.todo-list');

console.log(todoInput);

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputValue = todoInput.value;
    todoInput.value = "";  
    
    const newLi = document.createElement('li');
    const newLiInnerHTML = `
        <span class="text">${inputValue}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>
    `;
    
    newLi.innerHTML = newLiInnerHTML;
    todoList.appendChild(newLi);

    console.log(inputValue);
});

todoList.addEventListener('click', function(e) {
    if(e.target.classList.contains('remove')) {
        e.target.parentNode.parentNode.remove();
        console.log("remove");
    } else if(e.target.classList.contains('done')) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
        console.log(liSpan);
        console.log("done");
    }
});
