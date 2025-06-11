import { getMethod, postMethod } from "./utils"

const baseUrl = 'http://localhost:3000'

const getMethod = async (endpoint, body) => {
    try {
        const response = await fetch(
            `${baseUrl}/${endpoint}`,
        {
            method: 'post',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

export {
    getMethod,
    postMethod
}