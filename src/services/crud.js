import axios from "axios"

const baseURL = "https://claraborlu.pythonanywhere.com/"
// const baseURL = "http://127.0.0.1:8000/"
const client = axios.create({baseURL})
const headers = {
    'Authorization': 'Token 33720c550cfcf01d2f247d2137b284c511810045',
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

const completeTask = async (id) => {
    const response = await client.patch(`/task/${id}/completed/`, {},{headers})
    return response
}

const deleteTask = async (id) => {
    const response = await client.delete(`/task/${id}/`, { headers })
    return response
}

const updateTask = async (id, newTask) => {
    const response = await client.patch(`/task/${id}/`, newTask, { headers } )
    return response
}

export {
    getTasks,
    addTask,
    completeTask,
    deleteTask,
    updateTask
}
