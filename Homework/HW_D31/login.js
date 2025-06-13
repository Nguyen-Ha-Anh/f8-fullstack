import {post} from './api.js'

const loginBtnRef =  document.querySelector('#login-btn')

// const onMounted = () => {
//     const accessToken = localStorage.getItem('access')
//     if(accessToken) {
//         window.location.href = './home.html'
//     }
// }

loginBtnRef.addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value.trim()
    const pass = document.getElementById('password').value.trim()
    
    post('login', {
        email: email, password: pass
    })

    localStorage.setItem('access', DataTransfer.access)
    localStorage.setItem('refresh', DataTransfer.refresh)

    window.location.href = './home.html'
})

onMounted()