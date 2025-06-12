document.querySelector('.login').addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()
    const errMsg = document.getElementById('error-msg')

    if (!email || !password || password.length < 6) {
        errorE.textContent = 'Nhap lai di'
        return
    }

    errMsg.textContent = ''
    // console.log({email, password})

    try {
        const response = await fetch ('https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const result = await response.json()

        if (!response.ok) {
            errMsg.textContent = result.detail
        }

        // console.log(result)
    } catch (error) {
        console.error('error', error)
    }
})