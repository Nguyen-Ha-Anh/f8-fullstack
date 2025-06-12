const form = document.querySelector('#login')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const errMsg = document.querySelector('#error-message')

    const li = document.createElement('li')
    li.className = 'task-list'
    

    if (!email || !password) {
        errMsg.textContent = 'nhap du thong tin'
        return
    }

    errMsg.textContent = ''

    console.log('email', email)
    console.log('password', password)
    
})