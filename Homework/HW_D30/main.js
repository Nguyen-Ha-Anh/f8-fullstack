const todoList = document.querySelector('.todo-list')
const input = document.querySelector('.todo-input')
const form = document.querySelector('.todo-form')
const api = 'https://api-todolist-multiuser.onrender.com/Hanh/todos'

let todo = []
let editingId = null

const renderRow = (todo) => {
    const div = document.createElement('div')
    div.className = 'todo-item'

    const checkbox = document.createElement('input') 
    checkbox.type = 'checkbox'
    checkbox.checked = todo.complete

    checkbox.addEventListener('change', async () => {
        await fetch (`${api}/${todo.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                complete: checkbox.checked
            })
        })
        if (checkbox.checked) {
            content.classList.add('complete')
        }
        else {
            content.classList.remove('complete')
        }
    })

    const content = document.createElement('div')
    content.className = 'todo-content'
    content.textContent = todo.title
    if (todo.complete) content.classList.add('complete')

    const editBtn = document.createElement('button')
    editBtn.type = 'button'
    editBtn.className = 'edit-btn fa-solid fa-pen-to-square'

    editBtn.addEventListener('click', () => {
        input.value = todo.title
        input.focus()
        editingId = todo.id
    })

    const delBtn = document.createElement('button')
    delBtn.type = 'button'
    delBtn.className = 'del-btn fa-solid fa-trash'

    delBtn.addEventListener('click', async () => {
        const isConfirm = confirm('r u sure?')
        if (!isConfirm) return

        try {
            const res = await fetch(`${api}/${todo.id}`, {
                method: 'DELETE'
            })

            getTodos()
        } catch (err) {
            alert('Lỗi khi xoá: ' + err.message)
            console.error(err)
        }
    })

    div.append(checkbox)
    div.append(content)
    div.append(editBtn)
    div.append(delBtn)

    todoList.appendChild(div)
} 

const onRender = (todos) => {
    todoList.innerHTML = ''
    for (const todo of todos) {
        renderRow(todo)
    }
}

const getTodos = async () => {
    const response = await fetch(api)
    const data = await response.json()
    console.log(data)
    onRender(data)
}
getTodos()


form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const title = input.value.trim()
    if (!title) {
        alert('nhap noi dung')
        return
    }

    if (editingId) {
        const res = await fetch(`${api}/${editingId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        })

        if (!res.ok) {
            alert('Cập nhật thất bại')
            return
        }

        editingId = null
    } else {
        const newTodo = {
            title,
            complete: false
        }

        const res = await fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo)
        })

        if (!res.ok) {
            alert('Thêm mới thất bại')
            return
        }
    }
    
    input.value = ''
    input.focus()
    getTodos()
})





