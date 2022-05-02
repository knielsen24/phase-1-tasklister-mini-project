
const taskForm = document.getElementById('create-task-form')
const taskDescription = document.getElementById('new-task-description')
console.log(taskDescription)


document.addEventListener("DOMContentLoaded", () => {
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask (taskDescription.value)
    taskForm.reset()
  })
})


///

function addTask (task) {
  let list = document.createElement('li')
  let button = document.createElement('button')
  button.addEventListener('click', handleDelete)
  button.textContent = 'x'
  list.textContent = `${task} `
  list.appendChild(button)
  document.querySelector('#tasks').appendChild(list)
}


function handleDelete(e) {
  e.target.parentNode.remove()
}