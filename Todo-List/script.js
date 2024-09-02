
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

addTodoButton.addEventListener('click', () => {
    if (todoInput.value.trim() !== '') {
        const todoItem = document.createElement('li');
        todoItem.className = 'flex justify-between items-center border-b p-2';
        todoItem.innerHTML = `${todoInput.value} <button class="bg-red-500 text-white rounded" onclick="this.parentElement.remove();">Remove</button>`;
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
});