const baseUrl = 'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com'

export const get = async(endpoint) => {
    const response = await fetch(
        `${baseUrl}/${endpoint}`
    )
    
    const data = await response.json()

    if (data.detail === 'token expired') {
        await getNewToken(() => get(endpoint))
    }

    return data
}

export const post = async(endpoint, body) => {
    const response = await fetch(
        `${baseUrl}/${endpoint}`, {
            method: 'post',
            body: JSON.stringify(body)
        }
    )
    
    const data = await response.json()

    if (data.detail === 'token expired') {
        await getNewToken(() => post(endpoint, body))
    }

    return data
}

const getNewToken = async (callback) => {
    const data = await post('get_new_token', {
        refresh: localStorage.getItem('refesh')
    })

    if (data.access) {
        localStorage.setItem('access', data.access)
        await callback()
    }
}