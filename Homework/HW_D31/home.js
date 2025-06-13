const onMounted = () => {
    const accessToken = localStorage.getItem('access')
    if(!accessToken) {
        window.location.href = './login.html'
    }
}

onMounted()