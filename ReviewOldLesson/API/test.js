const taskInput = document.querySelector('#task-input')
const addTask = document.querySelector('#add-task')
const taskErr = document.querySelector('#task-error')
const taskList = document.querySelector('#task-list')

addTask.addEventListener('click', () => {
    const job = taskInput.value.trim()

    if(!job) {
        taskErr.textContent = 'nhap thong tin'
        return
    }

    taskErr.textContent = ''

    const li = document.createElement('li')
    li.textContent = job

    const delBtn = document.createElement('button')
    delBtn.textContent = 'delete'

    delBtn.addEventListener('click', () => {
        li.remove()
    })

    li.appendChild(delBtn)
    taskList.appendChild(li)

    taskInput.value = ''
})