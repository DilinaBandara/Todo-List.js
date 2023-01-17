const addBtn = document.querySelector('.todo-button')
const input = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')
const filter = document.querySelector('.filter-todo')


addBtn.addEventListener('click', function(event){
  event.preventDefault()
  const listElement = document.createElement('li')
  listElement.textContent = input.value
  todoList.appendChild(listElement)
})