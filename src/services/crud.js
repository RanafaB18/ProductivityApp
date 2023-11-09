import axios from "axios"

const baseURL = "https://claraborlu.pythonanywhere.com/"
// const baseURL = "http://127.0.0.1:8000/"
const client = axios.create({baseURL})
const headers = {
    'Authorization': 'Token 3739b90244d5f0a192bdb2c8209f7a6c27127fe8',
}


const getTasks = async () => {
    return await client.get(`/`, {
        headers
    })
}

const addTask = async (task) => {
    const response = await client.post("/add-task/", task, {headers})
    return response
}

export {
    getTasks,
    addTask
}
