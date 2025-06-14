import {post} from './api.js'

const loginBtnRef =  document.querySelector('#login-btn')
const form = document.getElementById('login-form')
const error = document.getElementById('error-msg')

const onMounted = () => {
    const accessToken = localStorage.getItem('access')
    if(accessToken) {
        window.location.href = './home.html'
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value.trim()
    const pass = document.getElementById('password').value.trim()

    if (!email || !pass || pass.length <6) {
        error.textContent = 'khong hop le'
        return
    }

    try {
        const data = await post('/login', {
            email: email,
            password: pass
        })

        if (data.access && data.refresh) {
            localStorage.setItem('access', data.access)
            localStorage.setItem('refresh', data.refresh)
            window.location.href = './home.html'
        } else {
            error.textContent = data.detail || 'that bai'
        }

    } catch(error) {
        console.error(error)
        error.textContent = 'thu lai'
    }

})

onMounted()