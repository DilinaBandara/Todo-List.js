const addBtn = document.querySelector('.todo-button')
const input = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')
const filter = document.querySelector('.filter-todo')
const option = document.getElementsByTagName('option')

addBtn.addEventListener('click', function(event){
  event.preventDefault()
  if(input.value.trim() === ''){
    window.alert("Task cannot be empty");
  } else{
    let listTemplate = `<li>${input.value}
    <button class="trash-btn">Trash</button>
    <button class="complete-btn">Complete</i></button>
    </li>
    `
    todoList.insertAdjacentHTML('beforeend', listTemplate)
    input.value = ""
  }
})

todoList.addEventListener('click', function(event){
  if(event.target.classList.contains('complete-btn')){
    event.target.parentElement.classList.toggle('completed')
  }
})

todoList.addEventListener('click', function(event){
  if(event.target.classList.contains('trash-btn')){
    event.target.parentElement.classList.add('deleted')
  }
})

// Check this code and go through the stuff you dont understand
filter.addEventListener('change', function(){
  let selectedOption = filter.value;
  let todos = Array.from(todoList.children);
  todos.forEach(function(todo){
      switch(selectedOption){
          case "completed":
              if(todo.classList.contains('completed')){
                  todo.style.display = "block";
              }else{
                  todo.style.display = "none";
              }
              break;
          case "incomplete":
              if(!todo.classList.contains('completed')){
                  todo.style.display = "block";
              }else{
                  todo.style.display = "none";
              }
              break;
          case "all":
              todo.style.display = "block";
              break;
      }
  });
});