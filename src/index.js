document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form')
  const taskList = document.querySelector('#tasks')
  const input = document.querySelector('#new-task-description')

  form.addEventListener('submit', function(event) {
    event.preventDefault()
    const text = input.value.trim()
    if (text === '') return
    const li = document.createElement('li')
    li.textContent = text
    taskList.appendChild(li)
    input.value = ''
  })
});
